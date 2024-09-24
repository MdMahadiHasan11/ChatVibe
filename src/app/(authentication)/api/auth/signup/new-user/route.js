import connectDB from "@/lib/connectDB";

export const POST = async (resques) => {
  try {
    const db = await connectDB();
    //    connection name
    const userCollection = db.collection("users");

    const newUser = await resques.json();
    const res = await userCollection.insertOne(newUser);
    return Response.json({ message: "new user Created" });
  } catch (error) {
    return Response.json({ message: "this is some problem"});
  }
};
