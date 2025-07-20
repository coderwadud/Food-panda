import { Routes } from '@angular/router';
import { Customer } from './components/customer/customer';
import { Admin } from './components/admin/admin';
import { Seller } from './components/seller/seller';
import { CreateCategory } from './components/admin/create-category/create-category';
import { ProductCategory } from './components/admin/product-category/product-category';
import { CreateProduct } from './components/admin/create-product/create-product';
import { CreateSeller } from './components/admin/create-seller/create-seller';
import { ProductCategoryList } from './components/admin/view/product-category-list/product-category-list';
import { SellerCategoryList } from './components/admin/view/seller-category-list/seller-category-list';
import { SellerList } from './components/admin/view/seller-list/seller-list';
import { ProductList } from './components/admin/view/product-list/product-list';
import { SingleSeller } from './components/admin/view/single-seller/single-seller';
import { Component } from '@angular/core';
import { SellerProfile } from './components/seller/seller-profile/seller-profile';

export const routes: Routes = [
    {
        path: '',
        component: Customer,
    },
    {
        path: 'admin',
        component: Admin,
        children: [
            {
                path: 'create-seller-category',
                component: CreateCategory
            },
            {
                path: 'create-product-category',
                component: ProductCategory
            },
            {
                path: 'create-product',
                component: CreateProduct
            },
            {
                path: 'create-seller',
                component: CreateSeller
            },
            {
                path: 'product-category-list',
                component: ProductCategoryList
            },
            {
                path: 'seller-category-list',
                component: SellerCategoryList
            },
            {
                path: 'seller-list',
                component: SellerList
            },
            {
                path: 'seller-list/:id',
                component: SingleSeller
            },
            {
                path: 'product-list',
                component: ProductList
            },
        ]
    },
    {
        path: 'seller',
        component: Seller,
        children:[
         {
            path: 'seller-profile/:id',
            component: SellerProfile
         }
        ]
    },
];
