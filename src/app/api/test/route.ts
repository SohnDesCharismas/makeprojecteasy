import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles GET requests for the Next.js server.
 *
 * 1. Checks for the existence of a cookie in the request headers.
 * 2. If a cookie exists, it calls an API endpoint to get a list of orders, passing along the cookie.
 * 3. Returns the result if the API call is successful (HTTP 200), otherwise returns an error.
 * 4. If any exception occurs, it returns an internal server error (HTTP 500).
 *
 * @param {NextRequest} request - The incoming request object.
 * @returns {Promise<NextResponse>} - The response to be sent back.
 */

export async function GET(request: Request) {
  const token = request.headers.get("Authorization");

  const res = await axios.post(
    `https://www.phonedistri.com/wp/wp-json/wpc/v1/get-addresses?jwt=${token}`
  );

  let result = res.data;

  return Response.json(result);
}

export async function POST(request: Request) {
  const token = request.headers.get("Authorization");
  const data = await request.json();

  const res = await axios.post(
    `https://www.phonedistri.com/wp/wp-json/wpc/v1/create-address`,
    {
      address: data,
      jwt: token,
    }
  );

  let result = res.data;

  return Response.json(result);
}

export async function PUT(request: Request) {
  const token = request.headers.get("Authorization");
  const data = await request.json();

  const res = await axios.post(
    `https://www.phonedistri.com/wp/wp-json/wpc/v1/update-address`,
    {
      address: data,
      jwt: token,
    }
  );

  let result = res.data;

  return Response.json(result);
}

export async function DELETE(request: Request) {
  const token = request.headers.get("Authorization");
  const data = await request.json();

  const res = await axios.post(
    `https://www.phonedistri.com/wp/wp-json/wpc/v1/delete-address`,
    {
      address_id: data.address_id,
      jwt: token,
    }
  );

  let result = res.data;

  return Response.json(result);
}
