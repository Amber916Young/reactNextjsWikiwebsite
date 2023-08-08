"use client";
import IconButton from "@/src/components/button/IconButton";
import React, { useEffect, useState } from "react";
import RichTextEditor from "@/src/components/editor/richTextEditor";
import { loadAllCategoryDataAPI } from "@/src/api/categories";
import { loadAllTagsDataAPI } from "@/src/api/tags";
import { CategoryItem, TagsItem } from "@/src/interface";
import {
  Select,
  Option,
  List,
  ListItem,
  ListItemPrefix,
  Checkbox,
  Button,
  Typography,
  Input,
  Card
} from "@material-tailwind/react";

const EditorPage = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<string>();
  const [categoryTreeData, setCategoryTreeData] = useState<CategoryItem[]>([]);
  const [tagsData, setTagsData] = useState<TagsItem[]>([]);
  const [html, setHtml] = useState("");

  useEffect(() => {
    loadAllCategoryDataAPI().then((res) => {
      console.info(res);
      setCategoryTreeData(res);
      // const treeData = convertToTreeData(res);
      // setCategoryTreeData(treeData)
    });
    loadAllTagsDataAPI().then((res) => {
      console.info(res);

      // const tagsData = convertToOptions(res);
      setTagsData(res);
    });
  }, []);
  const handleTypeChange = (newValue: string) => {
    setCategoryValue(newValue);
  };
  const convertToOptions = (tags: TagsItem[]): any[] => {
    return tags.map((tag) => {
      const { id, name } = tag;

      return {
        value: id.toString(),
        label: name,
      };
    });
  };
  const [selectedOptions, setSelectedOptions] = useState([]);

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

  return (

    <Card color="transparent" shadow={false}>
    <Typography variant="h4" color="blue-gray">
      Sign Up
    </Typography>
    <Typography color="gray" className="mt-1 font-normal">
      Enter your details to register.
    </Typography>
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-4 flex flex-col gap-6">
        <Input size="lg" label="Name" />
        <Input size="lg" label="Email" />
        <Input type="password" size="lg" label="Password" />
      </div>
      <Checkbox
        label={
          <Typography
            variant="small"
            color="gray"
            className="flex items-center font-normal"
          >
            I agree the
            <a
              href="#"
              className="font-medium transition-colors hover:text-blue-500"
            >
              &nbsp;Terms and Conditions
            </a>
          </Typography>
        }
        containerProps={{ className: "-ml-2.5" }}
      />
      <Button className="mt-6" fullWidth>
        Register
      </Button>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account?{" "}
        <a
          href="#"
          className="font-medium text-blue-500 transition-colors hover:text-blue-700"
        >
          Sign In
        </a>
      </Typography>
    </form>
  </Card>

    // <Card color="transparent" shadow={false}>
    //        <Typography variant="h4" color="blue-gray">
    //     Sign Up
    //   </Typography>
    //   <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
    // <div className="mb-4 flex flex-col gap-6">
    //   <div className="mb-4">
    //     <label htmlFor="type" className="block font-medium mb-1">
    //       分类
    //     </label>
    //     <select
    //       id="categories"
    //       className="w-full p-2 border rounded"
    //       value={categoryValue}
    //     >

    //      {categoryTreeData.map(category => (
    //     <option key={category.id} value={category.id}>{category.name}</option>
    //     ))}
    //     </select>
    //   </div>
    //   <div className="mb-4">
    //     <List className="flex-row">
    //       {tagsData.map((tag) => (
    //         <ListItem className="p-0">
    //           <label
    //             htmlFor={`${tag.id}`}
    //             className="flex w-full cursor-pointer items-center px-3 py-2"
    //           >
    //             <ListItemPrefix className="mr-3">
    //               <Checkbox
    //                 id="horizontal-list-react"
    //                 ripple={false}
    //                 className="hover:before:opacity-0"
    //                 containerProps={{
    //                   className: "p-0",
    //                 }}
    //               />
    //             </ListItemPrefix>
    //             <Typography
    //               key={tag.id}
    //               value={tag.id}
    //               color="blue-gray"
    //               className="font-medium"
    //             >
    //               {tag.name}
    //             </Typography>
    //           </label>
    //         </ListItem>
    //       ))}
    //     </List>

      
    //   </div>
    //   <div className="mb-4">
    //     <label htmlFor="content" className="block font-medium mb-1">
    //       Content:
    //     </label>
    //     <RichTextEditor html={html} setHtml={setHtml} />
    //   </div>

    //   <div className="mb-4">
    //     <label htmlFor="imageUrl" className="block font-medium mb-1">
    //       Image URL:
    //     </label>
    //     <input
    //       id="imageUrl"
    //       className="w-full p-2 border rounded"
    //       type="text"
    //       value={imageUrl}
    //       onChange={(e) => setImageUrl(e.target.value)}
    //     />
    //   </div>

    //   <div>
    //     <button className="px-4 py-2 bg-blue-500 text-white rounded">
    //       Save
    //     </button>
    //   </div>
    // </div>
    // </form>
    // </Card>
  );
};

export default EditorPage;
