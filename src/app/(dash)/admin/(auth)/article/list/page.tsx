"use client"
import React, { useEffect, useState } from "react";
import {DeleteOutlined, EditOutlined, PlusOutlined} from '@ant-design/icons'
import {Button, Popconfirm, Space, Switch, Tag, message} from 'antd'
import Forms from '@/src/components/forms'
import Tables from '@/src/components/tables'
import type {ColumnsType} from 'antd/es/table'
import {querylConfig} from '@/src/interface/form'
import {ArticleDataItem} from '@/src/interface/index'
import {loadDataAPI, insertAPI, updateByIdAPI, delByIdAPI} from '@/src/api/admin/article'
import moment from 'moment'
import AddNewWiki from './addArticleForm'
type Props = {}

const ArticleList = (props: Props) => {
  const [dataSource, setDataSource] = useState([])
    const [total, setTotal] = useState(0)
    const [isModalVisible, setModalVisible] = useState(false)
    const [editItem, setEditItem] = useState<ArticleDataItem | null>(null)
    const openModal = () => {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
        setEditItem(null)
    }
    const [query, setQuery] = useState({
      pageNumber: 1,
      pageSize: 10,
      queryStr: ''
  })
    const columns: ColumnsType<ArticleDataItem> = [
      {
          key: 'id',
          title: '序号',
          dataIndex: 'id',
          width: 100,
          align: 'center',
          fixed: 'left',
          sorter: (a, b) => a.id - b.id
      },
      {
          key: 'title',
          title: '标题',
          dataIndex: 'title',
          width: 180
      },
      {
          title: '封面',
          key: 'coverImage',
          dataIndex: 'coverImage',
          width: 120,
          align: 'center',
          render: (coverImage: string) => {
              return (
                  <>
                      <meta name="referrer" content="no-referrer"></meta>
                      <img className="t-img" src={coverImage}/>
                  </>
              )
          }
      },
      {
          title: '简介',
          key: 'description',
          dataIndex: 'description',
          width: 170,
          align: 'center'
      },
      {
          title: '文章类型',
          key: 'articleType',
          dataIndex: 'articleType',
          width: 170,
          align: 'center'
      },
      {
          title: '浏览量',
          key: 'viewCount',
          dataIndex: 'viewCount',
          width: 100,
          align: 'center'
      },
      {
          title: '点赞量',
          key: 'diggCount',
          dataIndex: 'diggCount',
          width: 100,
          align: 'center'
      },
      {
          title: '评论量',
          key: 'commentCount',
          dataIndex: 'commentCount',
          width: 100,
          align: 'center'
      },
      {
          title: '收藏量',
          key: 'collectCount',
          dataIndex: 'collectCount',
          width: 100,
          align: 'center'
      },
      {
          title: '分类Id',
          key: 'categoryId',
          dataIndex: 'categoryId',
          width: 120,
          align: 'center',
          render: (categoryId: string) => {
              return (
                  <span>
                      <Tag color="geekblue">{categoryId}</Tag>
                  </span>
              )
          }
      },
      {
          title: '创建者',
          key: 'createdBy',
          dataIndex: 'createdBy',
          width: 100,
          align: 'center'
      },
      {
          title: '创建者Id',
          key: 'userId',
          dataIndex: 'userId',
          width: 100,
          align: 'center'
      },
      {
          title: '标签',
          key: 'tagIds',
          dataIndex: 'tagIds',
          width: 150,
          align: 'center',
          render: (tagsStr: string) => {
              const tags = tagsStr ? tagsStr.split(',') : []
              return (
                  <span>
                      {tags.map((tag) => {
                          let color = tag.length > 5 ? 'geekblue' : 'green'
                          if (tag === 'loser') {
                              color = 'volcano'
                          }
                          return (
                              <Tag color={color} key={tag}>
                                  {tag}
                              </Tag>
                          )
                      })}
                  </span>
              )
          }
      },
      {
          title: '状态',
          key: 'status',
          dataIndex: 'status',
          width: 80,
          align: 'center',
          render: (status, record) => (
              <Switch
                  checked={status === "ACTIVE"}
                  onChange={(newStatus) => handleSwitchChange(record.id, newStatus, record)}
              />
          )
      },
      {
          title: '创建时间',
          key: 'createTime',
          dataIndex: 'createTime',
          width: 200,
          align: 'center',
          sorter: (a, b) => {
              const dateA = new Date(a.createTime).getTime()
              const dateB = new Date(b.createTime).getTime()
              return dateA - dateB
          },
          render: (value: string) => {
              const formattedTime = moment(value).format('YYYY-MM-DD HH:mm:ss')
              return <span>{formattedTime}</span>
          }
      },
      {
          title: '最后编辑时间',
          key: 'modifyTime',
          dataIndex: 'modifyTime',
          width: 200,
          align: 'center',
          sorter: (a, b) => {
              const dateA = new Date(a.modifyTime).getTime()
              const dateB = new Date(b.modifyTime).getTime()
              return dateA - dateB
          },
          render: (value: string) => {
              const formattedTime = moment(value).format('YYYY-MM-DD HH:mm:ss')
              return <span>{formattedTime}</span>
          }
      }
  ]

  useEffect(() => {
    loadDataAPI(query).then((res) => {
        message.success('查询成功')
        setDataSource(res.content)
        console.log(dataSource)
        setTotal(res.totalPages)
    })
}, [query])


const handleEdit = (editData: ArticleDataItem) => {
    setEditItem(editData || null);
    openModal();
};

const renderActions = (record: ArticleDataItem) => (
    <Space>
        <Button
            type="primary"
            icon={<EditOutlined/>}
            size="small"
            onClick={() => {
                handleEdit(record)
            }}
        />
        <Popconfirm
            title="是否确认删除此项?"
            onConfirm={() => {
                handleDelete(record['id'])
            }}
        >
            <Button type="primary" icon={<DeleteOutlined/>} size="small" danger/>
        </Popconfirm>
    </Space>
)

const columnsWithActions: ColumnsType<ArticleDataItem> = [
    ...columns,
    {title: '操作', width: 150, align: 'center', fixed: 'right', render: renderActions}
]

const onSearch = (values: any) => {
    console.warn('Received values of form: ', values)
}

const formConfig = {
    submit: onSearch,
    isShowAdvanced: true,
    formsColumn: querylConfig
}

const handleSwitchChange = (
    itemId: number,
    newStatus: boolean,
    record: ArticleDataItem
) => {
    const updatedStatus = newStatus ? "ACTIVE" : "DEACTIVATE"; // You can set "DEACTIVATE" here if needed
    updateByIdAPI(record).then((res) => {
      message.success("修改成功");
      // @ts-ignore
        setDataSource(prevDataSource =>
        prevDataSource.map(item =>
          item.id === itemId ? { ...item, status: updatedStatus } : item
        )
      );
    });
}

const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.warn('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
}

const handleFormSubmit = (formData: any) => {
    console.log('Form data:', formData)
    formData.status = false;
    if (Array.isArray(formData.tags)) {
        formData.tags = formData.tags.join(',')
    }

    insertAPI(formData).then((res) => {
        message.success('保存成功')
        setQuery({...query, queryStr: ''})
    })
    closeModal()
}

const handleFormUpdate = (formData: any) => {
    if (Array.isArray(formData.tags)) {
        formData.tags = formData.tags.join(',')
    }
    formData.id = editItem!.id
    updateByIdAPI(formData).then((res) => {
        message.success('保存成功')
        setQuery({...query, queryStr: ''})
    })
    closeModal()
}
const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
}



const handleDelete = (id: number) => {
    delByIdAPI(id).then((res) => {
        setQuery({...query, queryStr: ''})
    })
}
const handlePaginationChange = (page: number, pageSize: number) => {
    // Update the query state with the new pageSize
    setQuery((query) => ({
        ...query,
        pageNumber: page,
        pageSize: pageSize
    }))

    // Perform any other necessary logic with the updated query state
    console.log('Current page:', page)
    console.log('Current pageSize:', pageSize)
}

  return (
  
    <>
       <div className="card">
                <Forms formConfig={formConfig}/>
                <p className="mb-[12px]"></p>
                <Tables
                    scroll={{ y: 240 }}
                    rowKey='id'

                    columns={columnsWithActions}
                    dataSource={dataSource}
                    rowSelection={rowSelection}
                    pagination={{
                        pageSize: query.pageSize,
                        total,
                        onChange: (page: number, pageSize?: number) => {
                          handlePaginationChange(page, pageSize || query.pageSize);
                          return pageSize || query.pageSize;
                        },
                      }}
                    headerContent={{
                        isShowFilter: true,
                        settingDisable: ['name'],
                        content: () => [
                            <Button
                                key="add"
                                onClick={openModal}
                                type="primary"
                                icon={<PlusOutlined/>}
                            >
                                新增
                            </Button>,
                            <Button key="deletes" type="primary" danger icon={<DeleteOutlined/>}>
                                批量删除
                            </Button>
                        ]
                    }}
                />

                {isModalVisible && (
                    <AddNewWiki
                        editItem={editItem}
                        visible={isModalVisible}
                        onCancel={closeModal}
                        onOk={handleFormSubmit}
                        onUpdate={handleFormUpdate}
                    />
                )}
            </div>
    </>
  )
}

export default ArticleList