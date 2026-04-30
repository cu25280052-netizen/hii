<?php
session_start();

$books = [
    ["id"=>1, "name"=>"Book A", "price"=>300],
    ["id"=>2, "name"=>"Book B", "price"=>450],
    ["id"=>3, "name"=>"Book C", "price"=>250]
];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Online Book Store</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Online Book Store</h1>
<a href="cart.php">View Cart</a>

<div class="books">
<?php foreach($books as $book): ?>
    <div class="book">
        <h3><?php echo $book['name']; ?></h3>
        <p>Price: ₹<?php echo $book['price']; ?></p>
        <a href="add_to_cart.php?id=<?php echo $book['id']; ?>">Add to Cart</a>
    </div>
<?php endforeach; ?>
</div>

</body>
</html>
