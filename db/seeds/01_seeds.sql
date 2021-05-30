INSERT INTO users (name, email)
VALUES ('Dominic Parks', 'asdf@gamil.com'),
('Louisa Meyer', 'zxcv@gamil.com'),
('Lydia Greer', 'mnbv@gamil.com'),
('Mitchell Moreno', 'tytt@gmail.com'),
('Eva Stanley', 'sebastianguerra@gmail.com');

INSERT INTO products (user_id, gender, photo_url, description, size, category, price_of_product)
VALUES (1, 'women', 'https://cdn.shopify.com/s/files/1/0932/1356/products/Mar25-2021-Ecomm-Monica-24_800x.jpg?v=1619108093', 'Terry Cropped Hoodie in Moss', 'L', 'Hoodies', 75.99),
(1, 'women', 'https://cdn.shopify.com/s/files/1/0932/1356/products/Mar25-2021-Ecomm-Monica-11_800x.jpg?v=1619107106', 'Terry Hoodie in Taupe', 'S', 'Hoodies', 70.99),
(5, 'women', 'https://cdn.shopify.com/s/files/1/0932/1356/products/Mar25-2021-Ecomm-Monica-8_800x.jpg?v=1619107848', 'Terry Cropped Hoodie in Dawn', 'M', 'Hoodies', 53.99),
(1, 'men', 'https://oldnavy.gapcanada.ca/webcontent/0019/951/360/cn19951360.jpg', 'Straight Lived-In Khaki Non-Stretch Shorts for Men - 9-inch inseam', 'M', 'Shorts', 19.99),
(2, 'men', 'https://s7d2.scene7.com/is/image/FoxRacing/14625185_1?$dw_detn1$&wid=410&hei=615', 'Legacy Moth Pullover Gray Hoodie ', 'M', 'Hoodies', 69.99),
(3, 'women', 'https://i0.codibook.net/files/1978110628208/448ce58c6844637a/1433750937.jpg', 'Gradient Half Denim Pants', 'S', 'Shorts', 40.99),
(4, 'men', 'https://s7d2.scene7.com/is/image/FoxRacing/14625021_1?$dw_detn1$&wid=800&hei=800', 'Legacy Foxhead Pullover Black Hoodie', 'M', 'Hoodies', 55.99),
(2, 'men', 'https://s7d2.scene7.com/is/image/FoxRacing/25953185_1?$dw_detn1$&wid=800&hei=800', 'Crest Pullover Red and Gray Hoodie', 'M', 'Hoodies', 79.99),
(4, 'women', 'https://oldnavy.gapcanada.ca/webcontent/0020/021/390/cn20021390.jpg', 'High-Waisted Jersey Pink Leggings For Women', 'S', 'Leggings', 29.99),
(1, 'men', 'https://oldnavy.gapcanada.ca/webcontent/0019/711/881/cn19711881.jpg', 'Slim Ultimate Chino Shorts for Men -- 8-inch inseam', 'S', 'Shorts', 31.99),
(3, 'women', 'https://i0.codibook.net/files/1978110553406/90add89ce1bbc100/439129821.jpg', 'RODIN BANDING WIDE PANTS', 'S', 'Pants', 55.99),
(2, 'women', 'https://i0.codibook.net/files/1978110628049/3d/1790714586.jpg', 'Edin Summer Round Sweatshirt', 'M', 'Sweatshirts', 28.99),
(5, 'men', 'https://images.lululemon.com/is/image/lululemon/LM5ADNS_046842_3?wid=1440&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72', 'Dark Olive Surge Tight 28" Nulux', 'M', 'Leggings', 55.99),
(1, 'women', 'https://i0.codibook.net/files/1978110324603/e1b0780da7f01d47/253924677.jpg', 'Bear Print Short Sleeve T-Shirt', 'M', 'T-shirts', 23.99),
(4, 'men', 'https://oldnavy.gapcanada.ca/webcontent/0020/308/887/cn20308887.jpg', 'Slim Ultimate Shorts for Men - 10 inch inseam, Reddy For Action', 'M', 'Shorts', 30.99),
(4, 'women', 'https://i0.codibook.net/files/1978110610205/9e44ffcf050eb4cc/204972641.jpg', 'Long Slit Detail, Straight Wide Denim Pants', 'M', 'Pants', 45.99),
(2, 'men', 'https://oldnavy.gapcanada.ca/webcontent/0020/019/152/cn20019152.jpg', 'Lived-In Straight Cargo Shorts for Men -- 10-inch inseam', 'L', 'Shorts', 32.99),
(5, 'men', 'https://cdn.shopify.com/s/files/1/0932/1356/products/M-PleatedPants-Black-Count-1_800x.jpg?v=1616592371', 'Pleated Pants in Black', 'L', 'Pants', 95.99),
(1, 'men', 'https://cdn.shopify.com/s/files/1/0932/1356/products/Men_sEssentialCrew_PumiceStone_1200x_crop_center.jpg?v=1620241746', 'Essential Crew in Pumice Stone', 'L', 'T-shirts', 35.99),
(5, 'women', 'https://i0.codibook.net/files/1978110564211/65007ca57157126b/2095991763.jpg', 'Someday Part 9 Cotton Pants', 'L', 'Pants', 55.99);

INSERT INTO offers (buyer_id, product_id, current_status, offer_price)
VALUES (3, 1, 'pending', 65.99),
(2, 1, 'pending', 45.00),
(3, 5, 'reject', 29.88),
(3, 2, 'pending', 56.99),
(2, 4, 'reject', 32.99),
(4, 10, 'pending', 11.99),
(5, 20, 'complete', 55.99);

