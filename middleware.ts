import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
	return NextResponse.redirect(new URL("/customer", request.url));
};

export const config = {
	matcher: ["/"],
};
