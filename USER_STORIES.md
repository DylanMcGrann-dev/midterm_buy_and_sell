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

(user_address??)

- REVIEWS_TABLE
* PK - review_id
* FK - user_id
* review_rating
* review_comments

- CART_TABLE
* PK - cart_id
* FK - product_id
* FK - user_id
* cost??

- OFFERS_TABLE
* PK - offer_id
* FK - user_id
* FK - product_id

## PAGES
- Main Page
- Buy Page (browse products)
- Sellers Page
- Shopping Cart Page

## TIMELINE
[] Create Tables
[] Create Data
[] Download Relevant Images/ Fonts etc
[] Create Web Pages
[] Make It All Work
