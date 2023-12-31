import connect from "@/dbConfig/dbConfig";
import Review from "@/models/reviewModel";
import { NextRequest, NextResponse } from "next/server";

export interface formattedReviews {
    name: string;
    review: string;
    college: string | null;
    year: string;
    department: string;
}

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { name, email, review, department, year, college } = reqBody;

        //cheack if the review already exists
        const reviewAlreadyExists = await Review.findOne({ email });
        if (reviewAlreadyExists) {
            return NextResponse.json({ error: "Review already exists" }, { status: 400 });
        }
        //create a new review
        const newReview = await Review.create({ name, email, review, department, year, college });

        return NextResponse.json({ message: "Review created successg=fully" }, { status: 201 });

    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};

export async function GET(request: NextRequest) {
    try {
        //get all reviews
        const reviews = await Review.find({});

        //format the reviews
        let formated_reviews_object: formattedReviews[] = []
        for (const review of reviews) {
            const object = {
                name: review?.name,
                year: review?.year,
                review: review?.review,
                college: review?.college === undefined ? "" : review?.college,
                department: review?.department
            }
            formated_reviews_object.push(object);
        }

        return NextResponse.json({ formated_reviews_object }, { status: 200 });

    } catch (error: any) {

        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};