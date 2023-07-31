// import MyUpload from "@/src/components/Upload/MyUpload";
import {
  Space,
  Card,
  Button,
  Form,
  Input,
  message,
  Modal,
  Select,
  SelectProps,
  Switch, TreeSelect,
} from "antd";
import { useEffect, useState } from "react";

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import {CategoryItem, TagsItem} from "@/src/interface/index";
import {loadDataAPI} from "@/src/api/admin/categories";
import {loadAllDataAPI } from "@/src/api/admin/tags";
import RichTextEditor from "@/src/components/editor/richTextEditor";

const options: SelectProps["options"] = [];

interface AddNewWikiProps {
  visible: boolean;
  onCancel: () => void;
  onOk: (formData: any) => void;
  onUpdate: (formData: any) => void;
  editItem?: any;
}


const AddNewWiki = ({
  visible,
  onCancel,
  onOk,
  onUpdate,
  editItem,
}: AddNewWikiProps) => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string>('');
  const [categoryValue, setCategoryValue] = useState<string>();
  const [categoryTreeData, setCategoryTreeData] =  useState<any>(null);
  const [tagsData, setTagsData] =  useState<any>(null);

  useEffect(() => {
    loadDataAPI().then((res) => {
      const treeData = convertToTreeData(res);
      setCategoryTreeData(treeData)
    })
  }, []);

  useEffect(() => {
    loadAllDataAPI().then((res) => {
      const tagsData = convertToOptions(res);
      setTagsData(tagsData)
    })
  }, []);
  const convertToOptions = (tags: TagsItem[]): any[] => {
    return tags.map((tag) => {
      const { id, name } = tag;

      return {
        value: id.toString(),
        label: name,
      };
    });
  };
  const convertToTreeData = (categories: CategoryItem[]): any[] => {
    return categories.map((category) => {
      const { id, name, children } = category;
      const treeNode = {
        value: id.toString(),
        title: name,
      };
      if (children && children.length > 0) {
        treeNode.children = convertToTreeData(children);
      }

      return treeNode;
    });
  };


  const onCategoryChange = (newValue: string) => {
    setCategoryValue(newValue);
  };
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    if (editItem) {
      setImageUrl(editItem.wikiImageUrl)
      const tagsArray = editItem.tags ? editItem.tags.split(",") : [];
      form.setFieldsValue({ ...editItem,tags: tagsArray }); // Convert tags string to array
    } else {
      form.resetFields();
    }
  }, [editItem, form]);






  const handleFormSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        values.wikiImageUrl = imageUrl;
        editItem ? onUpdate(values) : onOk(values);
      })
      .catch((error) => {
        console.log("Form validation error:", error);
      });
  };

  return (
    <>
      <Modal
        title={editItem ? "修改" : "新增"}
        open={visible}
        maskClosable={false}
        onCancel={onCancel}
        destroyOnClose
        footer={[
          <Button key="cancel" onClick={onCancel}>
            取消
          </Button>,
          <Button key="submit" type="primary" onClick={handleFormSubmit}>
            {editItem ? "保存修改" : "新增"}
          </Button>,
        ]}
        width="80vw"
      >
        <Card style={{ width: "100%" }}>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Form
              layout={"vertical"}
              preserve={false}
              scrollToFirstError
              labelCol={{ span: 3 }}
              form={form}
            >
              <Form.Item
                label="标题"
                name="title"
                rules={[{ required: true, message: "请输入标题" }]}
              >
                <Input placeholder="请输入标题" />
              </Form.Item>

              <Form.Item
                label="分类"
                name="categoryType"
                rules={[{ required: true, message: "请选择分类" }]}
              >

                <TreeSelect
                    showSearch
                    style={{ width: '100%' }}
                    value={categoryValue}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="请选择分类"
                    allowClear
                    treeDefaultExpandAll
                    onChange={onChange}
                    treeData={categoryTreeData}
                />

              </Form.Item>

              <Form.Item
                label="标签"
                name="tags"
                rules={[{ required: true, message: "请选择标签" }]}
              >
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="请选择标签"
                  options={tagsData}
                />
              </Form.Item>

              <Form.Item label="主图" name="wikiImageUrl">
                {/* <MyUpload imageUrl={imageUrl} setImageUrl={setImageUrl} /> */}
              </Form.Item>
              <Form.Item
                label="简介"
                name="description"
                rules={[{ required: true, message: "请输入简介" }]}
              >
                <Input.TextArea
                  placeholder="请输入简介"
                  showCount
                  maxLength={300}
                />
              </Form.Item>

              <Form.Item
                label="正文"
                name="content"
                rules={[{ required: true, message: "请输入正文" }]}
              >

                 <RichTextEditor html={html} setHtml={setHtml} />
              
              </Form.Item>
            </Form>
          </Space>
        </Card>
      </Modal>
    </>
  );
};

export default AddNewWiki;
