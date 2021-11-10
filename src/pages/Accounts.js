import { Box } from "@mui/system"
import React from 'react'
import { Advisor } from "../components/Advisor"
import { BannerMessage } from "../components/BannerMessage"
import { GiveProduct } from "../components/GiveProduct"
import { LifeInsuranceProduct } from "../components/LifeInsuranceProduct"
import { Payments } from "../components/Payments"
import { Product } from "../components/Product"
import { SubHeader } from "../components/SubHeader"

export const Accounts = () => {
  return (
    <div className="AccountsPageContainer">
      <div className="AccountsPage">
        <BannerMessage />
        <Payments />
        <SubHeader text="grow" />
        <Product />
        <SubHeader text="protect" />
        <LifeInsuranceProduct />
        <SubHeader text="give" />
        <GiveProduct />
        <SubHeader text="my financial advisor" />
        <Advisor />
      </div>
    </div>
  )
}
