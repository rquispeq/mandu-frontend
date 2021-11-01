import { Layout } from 'antd'
import 'antd/dist/antd.css'
import './App.css'
import HeaderMandu from './components/HeaderMandu'
import MainContent from './components/MainContent'

// const dataSource = [
//     {
//         "id": 1,
//         "name": "CEO",
//         "colaboradores": 5,
//         "level": 1,
//         "division_id": null,
//         "created_at": "2021-10-30T07:02:56.000000Z",
//         "updated_at": "2021-10-30T07:02:56.000000Z",
//         "subdivisions": [
//             {
//                 "id": 3,
//                 "name": "Producto",
//                 "colaboradores": 7,
//                 "level": 2,
//                 "division_id": 1,
//                 "created_at": "2021-10-30T07:02:56.000000Z",
//                 "updated_at": "2021-10-30T07:02:56.000000Z"
//             },
//             {
//                 "id": 20,
//                 "name": "CEO",
//                 "colaboradores": 7,
//                 "level": 2,
//                 "division_id": 1,
//                 "created_at": "2021-10-30T07:03:03.000000Z",
//                 "updated_at": "2021-10-30T07:03:03.000000Z"
//             }
//         ],
//         "division_parent": null
//     },
//     {
//         "id": 2,
//         "name": "Dirección General",
//         "colaboradores": 7,
//         "level": 1,
//         "division_id": null,
//         "created_at": "2021-10-30T07:02:56.000000Z",
//         "updated_at": "2021-10-30T07:02:56.000000Z",
//         "subdivisions": [
//             {
//                 "id": 4,
//                 "name": "Operaciones",
//                 "colaboradores": 9,
//                 "level": 2,
//                 "division_id": 2,
//                 "created_at": "2021-10-30T07:02:56.000000Z",
//                 "updated_at": "2021-10-30T07:02:56.000000Z"
//             },
//             {
//                 "id": 11,
//                 "name": "Strategy",
//                 "colaboradores": 8,
//                 "level": 2,
//                 "division_id": 2,
//                 "created_at": "2021-10-30T07:03:03.000000Z",
//                 "updated_at": "2021-10-30T07:03:03.000000Z"
//             }
//         ],
//         "division_parent": null
//     },
//     {
//         "id": 3,
//         "name": "Producto",
//         "colaboradores": 7,
//         "level": 2,
//         "division_id": 1,
//         "created_at": "2021-10-30T07:02:56.000000Z",
//         "updated_at": "2021-10-30T07:02:56.000000Z",
//         "subdivisions": [],
//         "division_parent": {
//             "id": 1,
//             "name": "CEO",
//             "colaboradores": 5,
//             "level": 1,
//             "division_id": null,
//             "created_at": "2021-10-30T07:02:56.000000Z",
//             "updated_at": "2021-10-30T07:02:56.000000Z"
//         },
//         "division_parent_name": "CEO"
//     },
//     {
//         "id": 4,
//         "name": "Operaciones",
//         "colaboradores": 9,
//         "level": 2,
//         "division_id": 2,
//         "created_at": "2021-10-30T07:02:56.000000Z",
//         "updated_at": "2021-10-30T07:02:56.000000Z",
//         "subdivisions": [
//             {
//                 "id": 5,
//                 "name": "Dirección General",
//                 "colaboradores": 5,
//                 "level": 3,
//                 "division_id": 4,
//                 "created_at": "2021-10-30T07:02:56.000000Z",
//                 "updated_at": "2021-10-30T07:02:56.000000Z"
//             }
//         ],
//         "division_parent": {
//             "id": 2,
//             "name": "Dirección General",
//             "colaboradores": 7,
//             "level": 1,
//             "division_id": null,
//             "created_at": "2021-10-30T07:02:56.000000Z",
//             "updated_at": "2021-10-30T07:02:56.000000Z"
//         },
//         "division_parent_name": "Dirección General"
//     },
//     {
//         "id": 5,
//         "name": "Dirección General",
//         "colaboradores": 5,
//         "level": 3,
//         "division_id": 4,
//         "created_at": "2021-10-30T07:02:56.000000Z",
//         "updated_at": "2021-10-30T07:02:56.000000Z",
//         "subdivisions": [],
//         "division_parent": {
//             "id": 4,
//             "name": "Operaciones",
//             "colaboradores": 9,
//             "level": 2,
//             "division_id": 2,
//             "created_at": "2021-10-30T07:02:56.000000Z",
//             "updated_at": "2021-10-30T07:02:56.000000Z"
//         },
//         "division_parent_name": "Operaciones"
//     },
//     {
//         "id": 6,
//         "name": "Strategy",
//         "colaboradores": 1,
//         "level": 1,
//         "division_id": null,
//         "created_at": "2021-10-30T07:02:56.000000Z",
//         "updated_at": "2021-10-30T07:02:56.000000Z",
//         "subdivisions": [],
//         "division_parent": null
//     },
//     {
//         "id": 7,
//         "name": "CEO",
//         "colaboradores": 5,
//         "level": 1,
//         "division_id": null,
//         "created_at": "2021-10-30T07:02:56.000000Z",
//         "updated_at": "2021-10-30T07:02:56.000000Z",
//         "subdivisions": [
//             {
//                 "id": 9,
//                 "name": "Producto",
//                 "colaboradores": 10,
//                 "level": 2,
//                 "division_id": 7,
//                 "created_at": "2021-10-30T07:02:56.000000Z",
//                 "updated_at": "2021-10-30T07:02:56.000000Z"
//             },
//             {
//                 "id": 10,
//                 "name": "Operaciones",
//                 "colaboradores": 9,
//                 "level": 2,
//                 "division_id": 7,
//                 "created_at": "2021-10-30T07:02:56.000000Z",
//                 "updated_at": "2021-10-30T07:02:56.000000Z"
//             }
//         ],
//         "division_parent": null
//     },
//     {
//         "id": 8,
//         "name": "Producto",
//         "colaboradores": 5,
//         "level": 1,
//         "division_id": null,
//         "created_at": "2021-10-30T07:02:56.000000Z",
//         "updated_at": "2021-10-30T07:02:56.000000Z",
//         "subdivisions": [
//             {
//                 "id": 12,
//                 "name": "CEO",
//                 "colaboradores": 3,
//                 "level": 2,
//                 "division_id": 8,
//                 "created_at": "2021-10-30T07:03:03.000000Z",
//                 "updated_at": "2021-10-30T07:03:03.000000Z"
//             },
//             {
//                 "id": 15,
//                 "name": "Operaciones",
//                 "colaboradores": 9,
//                 "level": 2,
//                 "division_id": 8,
//                 "created_at": "2021-10-30T07:03:03.000000Z",
//                 "updated_at": "2021-10-30T07:03:03.000000Z"
//             }
//         ],
//         "division_parent": null
//     },
//     {
//         "id": 9,
//         "name": "Producto",
//         "colaboradores": 10,
//         "level": 2,
//         "division_id": 7,
//         "created_at": "2021-10-30T07:02:56.000000Z",
//         "updated_at": "2021-10-30T07:02:56.000000Z",
//         "subdivisions": [],
//         "division_parent": {
//             "id": 7,
//             "name": "CEO",
//             "colaboradores": 5,
//             "level": 1,
//             "division_id": null,
//             "created_at": "2021-10-30T07:02:56.000000Z",
//             "updated_at": "2021-10-30T07:02:56.000000Z"
//         },
//         "division_parent_name": "CEO"
//     },
//     {
//         "id": 10,
//         "name": "Operaciones",
//         "colaboradores": 9,
//         "level": 2,
//         "division_id": 7,
//         "created_at": "2021-10-30T07:02:56.000000Z",
//         "updated_at": "2021-10-30T07:02:56.000000Z",
//         "subdivisions": [],
//         "division_parent": {
//             "id": 7,
//             "name": "CEO",
//             "colaboradores": 5,
//             "level": 1,
//             "division_id": null,
//             "created_at": "2021-10-30T07:02:56.000000Z",
//             "updated_at": "2021-10-30T07:02:56.000000Z"
//         },
//         "division_parent_name": "CEO"
//     },
//     {
//         "id": 11,
//         "name": "Strategy",
//         "colaboradores": 8,
//         "level": 2,
//         "division_id": 2,
//         "created_at": "2021-10-30T07:03:03.000000Z",
//         "updated_at": "2021-10-30T07:03:03.000000Z",
//         "subdivisions": [
//             {
//                 "id": 17,
//                 "name": "Producto",
//                 "colaboradores": 3,
//                 "level": 3,
//                 "division_id": 11,
//                 "created_at": "2021-10-30T07:03:03.000000Z",
//                 "updated_at": "2021-10-30T07:03:03.000000Z"
//             }
//         ],
//         "division_parent": {
//             "id": 2,
//             "name": "Dirección General",
//             "colaboradores": 7,
//             "level": 1,
//             "division_id": null,
//             "created_at": "2021-10-30T07:02:56.000000Z",
//             "updated_at": "2021-10-30T07:02:56.000000Z"
//         },
//         "division_parent_name": "Dirección General"
//     },
//     {
//         "id": 12,
//         "name": "CEO",
//         "colaboradores": 3,
//         "level": 2,
//         "division_id": 8,
//         "created_at": "2021-10-30T07:03:03.000000Z",
//         "updated_at": "2021-10-30T07:03:03.000000Z",
//         "subdivisions": [],
//         "division_parent": {
//             "id": 8,
//             "name": "Producto",
//             "colaboradores": 5,
//             "level": 1,
//             "division_id": null,
//             "created_at": "2021-10-30T07:02:56.000000Z",
//             "updated_at": "2021-10-30T07:02:56.000000Z"
//         },
//         "division_parent_name": "Producto"
//     },
//     {
//         "id": 13,
//         "name": "Dirección General",
//         "colaboradores": 6,
//         "level": 1,
//         "division_id": null,
//         "created_at": "2021-10-30T07:03:03.000000Z",
//         "updated_at": "2021-10-30T07:03:03.000000Z",
//         "subdivisions": [],
//         "division_parent": null
//     },
//     {
//         "id": 14,
//         "name": "Operaciones",
//         "colaboradores": 10,
//         "level": 1,
//         "division_id": null,
//         "created_at": "2021-10-30T07:03:03.000000Z",
//         "updated_at": "2021-10-30T07:03:03.000000Z",
//         "subdivisions": [],
//         "division_parent": null
//     },
//     {
//         "id": 15,
//         "name": "Operaciones",
//         "colaboradores": 9,
//         "level": 2,
//         "division_id": 8,
//         "created_at": "2021-10-30T07:03:03.000000Z",
//         "updated_at": "2021-10-30T07:03:03.000000Z",
//         "subdivisions": [
//             {
//                 "id": 16,
//                 "name": "CEO",
//                 "colaboradores": 10,
//                 "level": 3,
//                 "division_id": 15,
//                 "created_at": "2021-10-30T07:03:03.000000Z",
//                 "updated_at": "2021-10-30T07:03:03.000000Z"
//             }
//         ],
//         "division_parent": {
//             "id": 8,
//             "name": "Producto",
//             "colaboradores": 5,
//             "level": 1,
//             "division_id": null,
//             "created_at": "2021-10-30T07:02:56.000000Z",
//             "updated_at": "2021-10-30T07:02:56.000000Z"
//         },
//         "division_parent_name": "Producto"
//     },
//     {
//         "id": 16,
//         "name": "CEO",
//         "colaboradores": 10,
//         "level": 3,
//         "division_id": 15,
//         "created_at": "2021-10-30T07:03:03.000000Z",
//         "updated_at": "2021-10-30T07:03:03.000000Z",
//         "subdivisions": [
//             {
//                 "id": 19,
//                 "name": "Operaciones",
//                 "colaboradores": 6,
//                 "level": 4,
//                 "division_id": 16,
//                 "created_at": "2021-10-30T07:03:03.000000Z",
//                 "updated_at": "2021-10-30T07:03:03.000000Z"
//             }
//         ],
//         "division_parent": {
//             "id": 15,
//             "name": "Operaciones",
//             "colaboradores": 9,
//             "level": 2,
//             "division_id": 8,
//             "created_at": "2021-10-30T07:03:03.000000Z",
//             "updated_at": "2021-10-30T07:03:03.000000Z"
//         },
//         "division_parent_name": "Operaciones"
//     },
//     {
//         "id": 17,
//         "name": "Producto",
//         "colaboradores": 3,
//         "level": 3,
//         "division_id": 11,
//         "created_at": "2021-10-30T07:03:03.000000Z",
//         "updated_at": "2021-10-30T07:03:03.000000Z",
//         "subdivisions": [],
//         "division_parent": {
//             "id": 11,
//             "name": "Strategy",
//             "colaboradores": 8,
//             "level": 2,
//             "division_id": 2,
//             "created_at": "2021-10-30T07:03:03.000000Z",
//             "updated_at": "2021-10-30T07:03:03.000000Z"
//         },
//         "division_parent_name": "Strategy"
//     },
//     {
//         "id": 18,
//         "name": "Operaciones",
//         "colaboradores": 9,
//         "level": 1,
//         "division_id": null,
//         "created_at": "2021-10-30T07:03:03.000000Z",
//         "updated_at": "2021-10-30T07:03:03.000000Z",
//         "subdivisions": [],
//         "division_parent": null
//     },
//     {
//         "id": 19,
//         "name": "Operaciones",
//         "colaboradores": 6,
//         "level": 4,
//         "division_id": 16,
//         "created_at": "2021-10-30T07:03:03.000000Z",
//         "updated_at": "2021-10-30T07:03:03.000000Z",
//         "subdivisions": [],
//         "division_parent": {
//             "id": 16,
//             "name": "CEO",
//             "colaboradores": 10,
//             "level": 3,
//             "division_id": 15,
//             "created_at": "2021-10-30T07:03:03.000000Z",
//             "updated_at": "2021-10-30T07:03:03.000000Z"
//         },
//         "division_parent_name": "CEO"
//     },
//     {
//         "id": 20,
//         "name": "CEO",
//         "colaboradores": 7,
//         "level": 2,
//         "division_id": 1,
//         "created_at": "2021-10-30T07:03:03.000000Z",
//         "updated_at": "2021-10-30T07:03:03.000000Z",
//         "subdivisions": [],
//         "division_parent": {
//             "id": 1,
//             "name": "CEO",
//             "colaboradores": 5,
//             "level": 1,
//             "division_id": null,
//             "created_at": "2021-10-30T07:02:56.000000Z",
//             "updated_at": "2021-10-30T07:02:56.000000Z"
//         },
//         "division_parent_name": "CEO"
//     }
// ]

// const columns = [
//     {
//         title: 'División',
//         dataIndex: 'name',
//         key: 'name',
//     },
//     {
//         title: 'División superior',
//         dataIndex: 'division_parent_name',
//         key: 'division_parent',
//     },
//     {
//         title: 'Colaboradores',
//         dataIndex: 'colaboradores',
//         key: 'colaboradores',
//     },
//     {
//         title: 'Nivel',
//         dataIndex: 'level',
//         key: 'level',
//     }
// ]

function App() {
  return (
    <Layout>
        <HeaderMandu/>
        <MainContent/>
    </Layout>
  )
}

export default App;
