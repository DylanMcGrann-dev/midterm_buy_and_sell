## USER STORIES
As a buyer, I want to search. browse to find what i'm looking for
As a seller, I need to be able to post items for sale
As a seller, I need to have the ability to remove my items
As a buyer, I want to see reviews of the seller
As a buyer, I want to be able to place an offer on an item
As a seller, I want the ability to mark my item as sold
As a buyer, I want to have the ability to add items to my cart

## TABLES
- PRODUCTS_TABLE
  * PK - product_id
  * FK - user_id
  * FK - offer_id
  * product_gender
  * product_size
  * product_category
  * product_image
  * product_description
  * product_price
 
- USERS_TABLE
* PK - user_id
* user_name
* user_email

- REVIEWS_TABLE
* PK - review_id
* FK - for_user_id
* FK - from_user_id
* FK - product_id
* review_rating
* review_comments

- OFFERS_TABLE
* PK - Offer_id
* FK - buyer_id
* FK - product_id
* offer_price
* offer_status

## PAGES
- Main Page 
- Buy Page (Single Page - Browse all products or by filter)
- Sellers Page (Single Page - Post New Product, View Other Posts, Delete Posts, Edit Posts, Bid Accept or Decline)
- Shopping Cart Page - (Image, Title, Price, Remove Product, Total, Checkout button)

## TIMELINE
[] Create Tables
[] Create Data (20 Products, 4 Users (2 Sellers), 4 Reviews)
[] Download Relevant Images/ Fonts etc
[] Create Web Pages
[] Make It All Work
[] When offer is accepted : * Retire or Cancel any other offers
                            * Product no longer active

## NAME
- Buy & Sell (BS)
- Shopnbuy

## TASKS FOR TODAY
- Data Input - (Kim)
- Database Queries (Herv, Dylan)

## STRETCH
- STRETCH - Reviews Table
- STRETCH - Users Profile Page
- STRETCH - Brand
- STRETCH - Search Bar
