import connectDB from "@/lib/connectDB";

export const POST = async (res) => {
  try {
    const db = await connectDB();
    //    connection name
    const userCollection = db.collection("users");

    const newUser = await res.json();
    const res = await userCollection.insertOne(newUser);
    return Response.json({ message: "new user Created" });
  } catch (error) {
    return Response.json({ message: "Something went wrong" });
  }
};

export const GET = () => {
  return "yess get data";
};
