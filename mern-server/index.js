const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const cors = require("cors");

//middleware : will make connection to frontend side
app.use(cors());
app.use(express.json());

//pWd6QV7ALHExbTw8

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//mongodb configuration
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://mern-book-store:pWd6QV7ALHExbTw8@cluster0.air5j95.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection of documents
    const booksCollections = client.db("BookInventory").collection("books");

    //insert a book to the database
    //post method
    app.post("/upload-book", async (req, res) => {
      try {
        console.log("Request Body:", req.body);
        const {
          title, // Frontend sends `title`, `author`, etc.
          author,
          imageURL,
          category,
          description,
          bookPDFURL,
          status,
          price,
        } = req.body;

        // Validate required fields
        if (!title || !author || !price) {
          return res
            .status(400)
            .json({ message: "Title, author, and price are required" });
        }

        // Prepare book data
        const newBook = {
          title,
          author,
          price,
          description,
          imageURL,
          category,
          bookPDFURL,
          status: status || "available", // Default to "available" if not provided
        };

        // Insert into database (Ensure you have a 'booksCollections' collection or adjust this part)
        const result = await booksCollections.insertOne(newBook);

        // Send response
        res.status(201).json({
          message: "Book uploaded successfully",
          book: { ...newBook, _id: result.insertedId },
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
    });

    //get all books from the database
    app.get("/all-books", async (req, res) => {
      const books = booksCollections.find();
      const result = await books.toArray();
      res.send(result);
    });

    //update a book data : patch or update book
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };

      //update
      const result = await booksCollections.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    //delete a book
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await booksCollections.deleteOne(filter);
      res.send(result);
    });

    //find  by category
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query ? category : No) {
        query = { category: req.query.category };
      }
      const result = await booksCollections.find(query).toArray();
      res.send(result);
    });

    //find a singlebook frm the database
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await booksCollections.findOne(filter);
      res.send(result);
    });

    // Get books statistics: Sold and Available
    app.get("/books-statistics", async (req, res) => {
      try {
        const booksSold = await booksCollections.countDocuments({
          status: "sold",
        });
        const booksAvailable = await booksCollections.countDocuments({
          status: "available",
        });

        res.send({
          booksSold,
          booksAvailable,
        });
      } catch (error) {
        console.error("Error fetching books statistics:", error);
        res.status(500).send({ message: "Internal server error" });
      }
    });

    // Ensure that the route exists
    app.get("/count-available-books", async (req, res) => {
      try {
        // Assuming you have a `booksCollections` MongoDB collection with a `status` field
        const availableBooksCount = await booksCollections.countDocuments({
          status: "available", // Filter by status 'available'
        });
        res.json({ availableBooks: availableBooksCount });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
    });

    app.listen(5000, () =>
      console.log("Server is running on http://localhost:5000")
    );

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);
