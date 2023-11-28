import connectToDB from "@/libs/mongodb";
import Topic from "@/models/topic,";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectToDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic created" }, { status: 201 });
}

export async function GET() {
  await connectToDB();
  const topics = await Topic.find();
  return NextResponse.json(topics);
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectToDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
