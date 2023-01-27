import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function BlogContent() {

    let {id} = useParams()
  
  return <h1>{id}</h1>;
}

export default BlogContent;
