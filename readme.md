
<h3 align="center">Iranian Debit Cards</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<br> 
<br> 

<p align="center"> React component for detecting Iranian debit cards
    <br> 
</p>

<div align="center">

![example1](https://sjafarnia.github.io/bank-images/example1.gif?raw=true)

</div>

<br> 
<br> 

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

<br> 

##  About <a name = "about"></a>

React component to get debit card data from users or show them their saved cards from database with full TypeScript support.

<br> 

## Getting Started <a name = "getting_started"></a>


### Prerequisites

```
npm i iranian-debit-cards-react
```

## Initializing

<br> 

A debit-card component to get card data

```
import { DebitCard } from "iranian-debit-cards-react";
// import styles if you don't have tailwindcss locally
import "iranian-debit-cards-react/dist/styles.css";

const [cardNumber, setCardNumber] = useState()

<DebitCard 
    changeHandler={(value) => setCardNumber(value)} 
    userName={"your user's name"} //optional
/>
```
<br> 

To show a saved card as a review-only component that has disabled input:

```
<DebitCard 
    card={"xxxx-xxxx-xxxx-xxxx"}
    userName={"your user's name"} //optional
/>
```
<br> 

Or show a saved card that is editable:
```
const [cardNumber, setCardNumber] = useState()

<DebitCard 
    card={"xxxx-xxxx-xxxx-xxxx"}
    changeHandler={(value) => setCardNumber(value)} 
    userName={"your user's name"} //optional
/>
```
