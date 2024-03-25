"use client"

import { Card, CardHeader, CardFooter, CardContent, CardTitle } from "@/components/ui/card";

export default function Post({ href, navigateToPost, title, body, date, id }) {



    return (
        <div onClick={navigateToPost} style={{ cursor: 'pointer' }}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}