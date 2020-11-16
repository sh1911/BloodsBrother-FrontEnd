import React from 'react';
import SkeletonElement from './SkeletonElement';
import Shimmmer from './Shimmer'

const SkeletonDataVizualizer=({theme})=>{
    const themeClass=theme||'light';
    return(
        <div className={`skeleton-wrapper ${themeClass}`}>
            
            <div className="skeleton-list">
                <SkeletonElement type="header2"/>
                <SkeletonElement  type="card2"/>                         
            </div>
            <Shimmmer/>
        </div>
    )
}
export default SkeletonDataVizualizer;