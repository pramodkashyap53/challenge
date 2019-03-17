<p align="center">
  <a href="https://www.cognitiveclouds.com">
      <img src="https://media.licdn.com/dms/image/C4E0BAQFFOu_LYPeBow/company-logo_400_400/0?e=1560384000&v=beta&t=xmTg-Ns3AkZYbbIw6178VC52O1bmCxbV4TNF7uNWxPg" alt="Cognitiveclouds"/>
  </a>
</p>
## Product search
get method run example http://localhost/api/products (to view all products) customize search with specification and order by price http://localhost/api/products?sort=price&order=asc&spec=sugar-free

this will order products by "price asc" and specification which has sugar-free like that you can search the products
## Challenge for Backend Developer

A customer needs to search in our product catalog (available in this <a href="https://github.com/ArvindNarayanCognitive/challenge/blob/master/products.json">JSON</a>) and he wants to find products that match your food restrictions.
Based on this you will need to develop:

- a simple API to search products in the .json available;
- it should be possible to search for products by their specifications (one or more);
- it must be possible to order the result by price (asc and desc);

The test should be done in NodeJS . We expect at the end of the test, outside the API running, the following items:

- an explanation of what is needed to make your project work;

Remember that at the time of the evaluation we will look at:

- Code organization;
- Object-Oriented Principles;
- Maintenance;

To send us your code, you must:

Make a fork of this repository, and send us a pull-request.
