import { Col, Table } from 'antd';
import { useEffect,useState } from 'react';

const TableDataMandu = () => {

    const [dataSource,setDataSource] = useState([])
    const [error,setError] = useState([])

    function get_filters_column_division(){
        let filters_column_division = []
        let unique_values_filter = []
    
        // guardamos en el array unique_Values_filter el valor name de cada registro
        // y si en la siguiente iteracion el valor name no existe, se agrega.
        dataSource.map((item,index) => {
            if (!unique_values_filter.includes(item.name)) {
                unique_values_filter.push(item.name)
            }
        })

        // iteramos el array unique_values_filter para retornar un json con la estructura de filters    
        filters_column_division = unique_values_filter.map((item,index) => {
            return {text: item, value: item}
        })

        return filters_column_division
    }

    function get_filterss_column_division_parent(){
        let filters_column_division = []
        let unique_values_filter = []
    
        // guardamos en el array unique_Values_filter el valor name de cada registro
        // y si en la siguiente iteracion el valor name no existe, se agrega.
        dataSource.map((item,index) => {
            if (!unique_values_filter.includes(item.division_parent_name) && item.division_parent_name !== null) {
                unique_values_filter.push(item.division_parent_name)
            }
        })
        // console.log(dataSource)
        // console.log(unique_values_filter)

        

        // iteramos el array unique_values_filter para retornar un json con la estructura de filters    
        filters_column_division = unique_values_filter.map((item,index) => {
            return {text: item, value: item}
        })

        return filters_column_division
    }

    function get_filterss_column_division_colaboradores(){
        let filters_column_division = []
        let unique_values_filter = []
    
        // guardamos en el array unique_Values_filter el valor name de cada registro
        // y si en la siguiente iteracion el valor name no existe, se agrega.
        dataSource.map((item,index) => {
            if (!unique_values_filter.includes(item.colaboradores) && item.colaboradores !== null) {
                unique_values_filter.push(item.colaboradores)
            }
        })
        // console.log(dataSource)
        // console.log(unique_values_filter)

        

        // iteramos el array unique_values_filter para retornar un json con la estructura de filters    
        filters_column_division = unique_values_filter.map((item,index) => {
            return {text: item, value: item}
        })

        return filters_column_division
    }

    function get_filterss_column_division_levels(){
        let filters_column_division = []
        let unique_values_filter = []
    
        // guardamos en el array unique_Values_filter el valor name de cada registro
        // y si en la siguiente iteracion el valor name no existe, se agrega.
        dataSource.map((item,index) => {
            if (!unique_values_filter.includes(item.level) && item.level !== null) {
                unique_values_filter.push(item.level)
            }
        })

        // iteramos el array unique_values_filter para retornar un json con la estructura de filters    
        filters_column_division = unique_values_filter.map((item,index) => {
            return {text: item, value: item}
        })

        return filters_column_division
    }

    // array de columnas para la tabla
    const columns = [
        {
            title: 'División',
            dataIndex: 'name',
            key: 'name',
            filters: get_filters_column_division(),
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend','ascend'],
        },
        {
            title: 'División superior',
            dataIndex: 'division_parent_name',
            key: 'division_parent',
            filters: get_filterss_column_division_parent(),
            onFilter: (value, record) => record.division_parent_name.indexOf(value) === 0,
            sorter: (a, b) => a.division_parent_name.length - b.division_parent_name.length,
            sortDirections: ['descend','ascend'],
        },
        {
            title: 'Colaboradores',
            dataIndex: 'colaboradores',
            key: 'colaboradores',
            filters: get_filterss_column_division_colaboradores(),
            onFilter: (value, record) => record.colaboradores.toString().indexOf(value) === 0,
            sorter: (a, b) => a.colaboradores.length - b.colaboradores.length,
            sortDirections: ['descend','ascend'],
        },
        {
            title: 'Nivel',
            dataIndex: 'level',
            key: 'level',
            filters: get_filterss_column_division_levels(),
            onFilter: (value, record) => record.level.toString().indexOf(value) === 0,
            sorter: (a, b) => a.level.length - b.level.length,
            sortDirections: ['descend','ascend'],
        }
    ]

    // LLamada api de las divisiones
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/division")
        .then(response => response.json())
        .then(data => setDataSource(data))
        .catch(error => setError(error))
    },[])

    return (
        <>
            <Col span={24}>
                <Table columns={columns} dataSource={dataSource} rowKey="id" />
            </Col>
            <Col span={24}>Total de colaboradores: {dataSource.length} </Col>
        </>
    )
}

export default TableDataMandu