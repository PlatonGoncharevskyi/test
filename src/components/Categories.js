import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true,
            categories: [
              
                {
                    key: 'reflectives',
                    name: 'Світловідбиваючі вироби',
                },
                {
                    key: 'compresor',
                    name: 'Компресори та домкрати',
                },
                {
                    key: 'aidkit',
                    name: 'Аптечки',
                },
                {
                    key: 'water',
                    name: 'Водозгони',
                },
                {
                    key: 'napkincar',
                    name: 'Серветки (ProSwissCar)',
                },
                {
                    key: 'napkinhome',
                    name: 'Серветки (ProSwissHome)',
                },
                {
                    key: 'hamut',
                    name: 'Хамути',
                },
                {
                    key: 'carmats',
                    name: 'Килимки автомобільні',
                },
                {
                    key: 'ropes',
                    name: 'Троси та ремені стяжні',
                },
                {
                    key: 'covers',
                    name: 'Чохли для транспорту',
                },
                {
                    key: 'fuses',
                    name: 'Запобіжники',
                },
                {
                    key: 'funnels',
                    name: 'Воронки',
                },
                {
                    key: 'carkeys',
                    name: 'Автомобільні ключі',
                },
                {
                    key: 'wiperblades',
                    name: 'Щітки склоочисника',
                },
                {
                    key: 'carstickers',
                    name: 'Автомобільні наліпки',
                },
                {
                    key: 'dishes',
                    name: 'Посуд',
                },
                {
                    key: 'different',
                    name: 'Різне',
                },
            ]
        }
    }

    handleCategoryClick = (categoryKey) => {
        
        this.props.chooseCategory(categoryKey);
    }

  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key = {el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories

//Категорії: Компресори та домкрати, Водозгони, Серветки (ProSwissCar, ProSwissHome), 
//Хамути, Килимки автомобільні, Троси та ремені стяжні, Чохли для транспорту, Запобіжники, Світловідбиваючі вироби,
//Воронки, Автомобільні ключі, Щітки склоочисника, Аптечки, Автомобільні наліпки, Різне 

