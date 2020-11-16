import React from 'react';
import SkeletonElement from './SkeletonElement';
const SkeletonProviderInsider=()=>{
    return(
        <div className="skeleton-wrapper">
            <div className="skeleton-list">
                <SkeletonElement type="header"/>
                <SkeletonElement  type="title"/>
                <SkeletonElement  type="text"/>
                <SkeletonElement  type="text"/>                           
            </div>
        </div>
    )
}
export default SkeletonProviderInsider;