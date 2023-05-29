import { connectToDataBase } from "../../../utils/database";
import Melody from "../../../models/melody";

export const POST = async (req) => {
  const { userID, melody, tag } = await req.json();

  try {
    await connectToDB();
    const newMelody = new Melody({ creator: userId, melody, tag });

    await newMelody.save();
    return new Response(JSON.stringify(newMelody), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
