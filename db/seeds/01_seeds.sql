INSERT INTO users (name, email)
VALUES ('Dominic Parks', 'hervieb@hotmail.com'),
('Louisa Meyer', 'ksm5611@hanmail.net'),
('Lydia Greer', 'ksm5611@naver.com'),
('Mitchell Moreno', 'dylanmcgrannit@gmail.com'),
('Eva Stanley', 'kim.sumin.wat2014@gmail.com');

INSERT INTO products (user_id, gender, photo_url, description, size, category, price_of_product, sold_date)
VALUES (5, 'women', 'https://cdn.shopify.com/s/files/1/0932/1356/products/Mar25-2021-Ecomm-Monica-24_800x.jpg?v=1619108093', 'Terry Cropped Hoodie in Moss', 'L', 'Hoodies', 7599, NULL),
(5, 'women', 'https://cdn.shopify.com/s/files/1/0932/1356/products/Mar25-2021-Ecomm-Monica-11_800x.jpg?v=1619107106', 'Terry Hoodie in Taupe', 'S', 'Hoodies', 7099, NULL),
(5, 'women', 'https://cdn.shopify.com/s/files/1/0932/1356/products/Mar25-2021-Ecomm-Monica-8_800x.jpg?v=1619107848', 'Terry Cropped Hoodie in Dawn', 'M', 'Hoodies', 5399, NULL),
(5, 'men', 'https://oldnavy.gapcanada.ca/webcontent/0019/951/360/cn19951360.jpg', 'Straight Lived-In Khaki Non-Stretch Shorts for Men - 9-inch inseam', 'M', 'Shorts', 1999, NULL),
(4, 'men', 'https://s7d2.scene7.com/is/image/FoxRacing/14625185_1?$dw_detn1$&wid=410&hei=615', 'Legacy Moth Pullover Gray Hoodie ', 'M', 'Hoodies', 6999, NULL),
(5, 'women', 'https://i0.codibook.net/files/1978110628208/448ce58c6844637a/1433750937.jpg', 'Gradient Half Denim Pants', 'S', 'Shorts', 4099, NULL),
(4, 'men', 'https://s7d2.scene7.com/is/image/FoxRacing/14625021_1?$dw_detn1$&wid=800&hei=800', 'Legacy Foxhead Pullover Black Hoodie', 'M', 'Hoodies', 5599, NULL),
(1, 'men', 'https://s7d2.scene7.com/is/image/FoxRacing/25953185_1?$dw_detn1$&wid=800&hei=800', 'Crest Pullover Red and Gray Hoodie', 'M', 'Hoodies', 7999, NULL),
(4, 'women', 'https://oldnavy.gapcanada.ca/webcontent/0020/021/390/cn20021390.jpg', 'High-Waisted Jersey Pink Leggings For Women', 'S', 'Leggings', 2999, NULL),
(5, 'men', 'https://oldnavy.gapcanada.ca/webcontent/0019/711/881/cn19711881.jpg', 'Slim Ultimate Chino Shorts for Men -- 8-inch inseam', 'S', 'Shorts', 3199, NULL),
(5, 'women', 'https://i0.codibook.net/files/1978110553406/90add89ce1bbc100/439129821.jpg', 'RODIN BANDING WIDE PANTS', 'S', 'Pants', 5599, NULL),
(1, 'women', 'https://i0.codibook.net/files/1978110628049/3d/1790714586.jpg', 'Edin Summer Round Sweatshirt', 'M', 'Sweatshirts', 2899, NULL),
(5, 'men', 'https://images.lululemon.com/is/image/lululemon/LM5ADNS_046842_3?wid=1440&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72', 'Dark Olive Surge Tight 28" Nulux', 'M', 'Leggings', 5599, NULL),
(1, 'women', 'https://i0.codibook.net/files/1978110324603/e1b0780da7f01d47/253924677.jpg', 'Bear Print Short Sleeve T-Shirt', 'M', 'T-shirts', 2399, NULL),
(4, 'men', 'https://oldnavy.gapcanada.ca/webcontent/0020/308/887/cn20308887.jpg', 'Slim Ultimate Shorts for Men - 10 inch inseam, Reddy For Action', 'M', 'Shorts', 3099, NULL),
(5, 'women', 'https://i0.codibook.net/files/1978110610205/9e44ffcf050eb4cc/204972641.jpg', 'Long Slit Detail, Straight Wide Denim Pants', 'M', 'Pants', 4599, NULL),
(1, 'men', 'https://oldnavy.gapcanada.ca/webcontent/0020/019/152/cn20019152.jpg', 'Lived-In Straight Cargo Shorts for Men -- 10-inch inseam', 'L', 'Shorts', 3299, NULL),
(5, 'men', 'https://cdn.shopify.com/s/files/1/0932/1356/products/M-PleatedPants-Black-Count-1_800x.jpg?v=1616592371', 'Pleated Pants in Black', 'L', 'Pants', 9599, NULL),
(1, 'men', 'https://cdn.shopify.com/s/files/1/0932/1356/products/Men_sEssentialCrew_PumiceStone_1200x_crop_center.jpg?v=1620241746', 'Essential Crew in Pumice Stone', 'L', 'T-shirts', 3599, NULL),
(5, 'women', 'https://i0.codibook.net/files/1978110564211/65007ca57157126b/2095991763.jpg', 'Someday Part 9 Cotton Pants', 'L', 'Pants', 5599, NULL);

INSERT INTO offers (buyer_id, product_id)
VALUES (3, 1),
(2, 1),
(3, 2),
(3, 3),
(2, 4),
(4, 10),
(5, 20);

