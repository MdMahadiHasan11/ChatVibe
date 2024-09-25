import connectDB from "@/lib/connectDB";
import bcrypt from "bcrypt";
export const POST = async (resques) => {
  try {
    const db = await connectDB();
    //    connection name
    const userCollection = db.collection("users");
    const newUser = await resques.json();
    // already user have or not
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return Response.json({ message: "user Exists" });
    }
    //password set
    const bcryptPassword = bcrypt.hashSync(newUser.password, 14);
    const res = await userCollection.insertOne({
      ...newUser,
      password: bcryptPassword,
    });
    return Response.json({ message: "new user Created" }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: "Something Wrong", error },
      { status: 500 }
    );
  }
};
