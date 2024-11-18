---
layout: post
title: "Libros leídos"
date: 2022-07-09
description: "Resumen de los libros que he leído."
img_url: /assets/img/libros_leidos/portada_libros.png
tags: [libros, hobbies]
language: [python]
comments: true
---

Este post es una bitacorá de los libros que leído, intentaré dar una descripción y opinión simple sobre estos. Cabe mencionar que no soy experto en literatura sino un simple *amateur* que le gusta la lectura, por lo qué las opiniones de este post se debe tomar con cuatelas. 


<div id="books-container" style="text-align: center;"></div>
<script src="../../../assets/js/books.js"></script>

<script>
const container = document.getElementById("books-container");

books.forEach((book) => {
    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "tooltip";

    const link = document.createElement("a");
    link.href = book.url;
    link.target = "_blank";

    const img = document.createElement("img");
    img.src = book.src;
    img.alt = book.alt;
    img.width = 120;
    img.style.borderRadius = "150px";
    img.style.transition = "transform 0.3s ease";

    const tooltipText = document.createElement("span");
    tooltipText.className = "tooltip-text";
    tooltipText.textContent = book.alt;

    link.appendChild(img);
    tooltipDiv.appendChild(link);
    tooltipDiv.appendChild(tooltipText);
    container.appendChild(tooltipDiv);
  });
</script>

<style>
  .tooltip {
    position: relative;
    display: inline-block;
    margin: 10px;
    vertical-align: top;
  }

  .tooltip img {
    transition: transform 0.3s ease;
    border-radius: 0;
    height: auto;
  }

  .tooltip:hover img {
    transform: scale(1.2);
  }

  .tooltip .tooltip-text {
    visibility: hidden;
    width: auto;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    position: absolute;
    bottom: 110%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    white-space: nowrap;
  }

  .tooltip:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
  a:hover {
  	color:#66ccff;
  	text-decoration: underline;
  }
</style>

