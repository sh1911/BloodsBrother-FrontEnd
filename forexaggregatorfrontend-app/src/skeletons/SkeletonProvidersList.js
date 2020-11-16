import React from 'react';
import SkeletonElement from './SkeletonElement';
import Shimmmer from './Shimmer'

const SkeletonProvidersList=({theme})=>{
    const themeClass=theme||'light';
    return(
        <div className={`skeleton-wrapper ${themeClass}`}>
            
            <div className="skeleton-list">
                <SkeletonElement type="header"/>
                <SkeletonElement  type="title"/>
                <SkeletonElement  type="text"/>
                <SkeletonElement  type="text"/> 
                <SkeletonElement  type="title"/>
                <SkeletonElement  type="text"/>
                <SkeletonElement  type="text"/>
                <SkeletonElement  type="title"/>
                <SkeletonElement  type="text"/>
                <SkeletonElement  type="text"/>                         
            </div>
            <Shimmmer/>
        </div>
    )
}
export default SkeletonProvidersList;