import React from 'react'
import SHOP_DATA from './shop-data'
import './shop-page.styles.scss'
import CollectionPreview from '../../components/collection-preview/collection-preview.components'

class ShopPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
        }
    }


    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
            <h1>SHOP PAGE</h1>
            {
                collections.map(collection => (
                    <CollectionPreview key={collection.id} title={collection.title} items={collection.items}/>
                ))
            }
            </div>
        )
    }
}


export default ShopPage;