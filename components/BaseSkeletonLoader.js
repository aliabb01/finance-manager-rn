import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

const BaseSkeletonLoader = (props) => (
    <ContentLoader 
    speed={1.0}
    width={375}
    height={250}
    viewBox="0 0 400 150"
    // backgroundColor="#d0ecfb"
    // foregroundColor="#42d9ff"

    // backgroundColor="#D3D3D3"
    // foregroundColor="#E8E8E8"
    backgroundColor="#e1e1e1"
    foregroundColor="#d2d2d2"
    {...props}
  >
    <Circle cx="25" cy="30" r="12" /> 
    <Rect x="50" y="25" rx="5" ry="5" width="85%" height="11" /> 

    <Circle cx="25" cy="60" r="12" /> 
    <Rect x="50" y="55" rx="5" ry="5" width="85%" height="11" /> 

    <Circle cx="25" cy="90" r="12" /> 
    <Rect x="50" y="85" rx="5" ry="5" width="85%" height="11" /> 

    <Circle cx="25" cy="120" r="12" /> 
    <Rect x="50" y="115" rx="5" ry="5" width="85%" height="11" />

    <Circle cx="25" cy="150" r="12" /> 
    <Rect x="50" y="145" rx="5" ry="5" width="85%" height="11" /> 
    
    {/* <Circle cx="25" cy="180" r="12" /> 
    <Rect x="50" y="175" rx="5" ry="5" width="75%" height="11" /> */}
    
    
  </ContentLoader>
)

export default BaseSkeletonLoader

