import { NextResponse } from "next/server"

function jsonResponse(status: number, data: any) {
  return new NextResponse(JSON.stringify({ status, ...data }), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export function successResponse(data: any) {
  return jsonResponse(200, data)
}

export function createdResponse(data: any) {
  return jsonResponse(201, data)
}

export function acceptedResponse() {
  return jsonResponse(202, { error: "Accepted" })
}

export function nonAuthoritativeInformationResponse() {
  return jsonResponse(203, { error: "Non-authoritative information" })
}

export function noContentResponse() {
  return jsonResponse(204, { error: "No content" })
}

export function resetContentResponse() {
  return jsonResponse(205, { error: "Reset content" })
}

export function partialContentResponse() {
  return jsonResponse(206, { error: "Partial content" })
}

export function multiStatusResponse() {
  return jsonResponse(207, { error: "Multi status" })
}

export function alreadyReportedResponse() {
  return jsonResponse(208, { error: "Already reported" })
}

export function imUsedResponse() {
  return jsonResponse(226, { error: "Im used" })
}

export function multipleChoicesResponse() {
  return jsonResponse(300, { error: "Multiple choices" })
}

export function movedPermanentlyResponse() {
  return jsonResponse(301, { error: "Moved permanently" })
}

export function foundResponse() {
  return jsonResponse(302, { error: "Found" })
}

export function seeOtherResponse() {
  return jsonResponse(303, { error: "See other" })
}

export function notModifiedResponse() {
  return jsonResponse(304, { error: "Not modified" })
}

export function useProxyResponse() {
  return jsonResponse(305, { error: "Use proxy" })
}

export function temporaryRedirectResponse() {
  return jsonResponse(307, { error: "Temporary redirect" })
}

export function permanentRedirectResponse() {
  return jsonResponse(308, { error: "Permanent redirect" })
}

export function badRequestResponse(errorMessage?: string) {
  return jsonResponse(400, { error: errorMessage ?? "Bad request" })
}

export function unauthorizedResponse(errorMessage: string) {
  return jsonResponse(401, { error: errorMessage })
}

export function paymentRequiredResponse() {
  return jsonResponse(402, { error: "Payment required" })
}

export function forbiddenResponse() {
  return jsonResponse(403, { error: "Forbidden" })
}

export function notFoundResponse() {
  return jsonResponse(404, { error: "Not found" })
}

export function methodNotAllowedResponse() {
  return jsonResponse(405, { error: "Method not allowed" })
}

export function notAcceptableResponse() {
  return jsonResponse(406, { error: "Not acceptable" })
}

export function proxyAuthenticationRequiredResponse() {
  return jsonResponse(407, { error: "Proxy authentication required" })
}

export function requestTimeoutResponse() {
  return jsonResponse(408, { error: "Request timeout" })
}

export function conflictResponse(errorMessage?: string) {
  return jsonResponse(409, { error: errorMessage ?? "Conflict" })
}

export function goneResponse() {
  return jsonResponse(410, { error: "Gone" })
}

export function lengthRequiredResponse() {
  return jsonResponse(411, { error: "Length required" })
}

export function preconditionFailedResponse() {
  return jsonResponse(412, { error: "Precondition failed" })
}

export function payloadTooLargeResponse() {
  return jsonResponse(413, { error: "Payload too large" })
}

export function uriTooLongResponse() {
  return jsonResponse(414, { error: "URI too long" })
}

export function unsupportedMediaTypeResponse() {
  return jsonResponse(415, { error: "Unsupported media type" })
}

export function rangeNotSatisfiableResponse() {
  return jsonResponse(416, { error: "Range not satisfiable" })
}

export function expectationFailedResponse() {
  return jsonResponse(417, { error: "Expectation failed" })
}

export function iAmATeapotResponse() {
  return jsonResponse(418, { error: "I am a teapot" })
}

export function enhanceYourCalmResponse() {
  return jsonResponse(420, { error: "Enhance your calm" })
}

export function misdirectedRequestResponse() {
  return jsonResponse(421, { error: "Misdirected request" })
}

export function unprocessableEntityResponse() {
  return jsonResponse(422, { error: "Unprocessable entity" })
}

export function lockedResponse() {
  return jsonResponse(423, { error: "Locked" })
}

export function failedDependencyResponse() {
  return jsonResponse(424, { error: "Failed dependency" })
}

export function tooEarlyResponse() {
  return jsonResponse(425, { error: "Too early" })
}

export function upgradeRequiredResponse() {
  return jsonResponse(426, { error: "Upgrade required" })
}

export function preconditionRequiredResponse() {
  return jsonResponse(428, { error: "Precondition required" })
}

export function tooManyRequestsResponse() {
  return jsonResponse(429, { error: "Too many requests" })
}

export function requestHeaderFieldsTooLargeResponse() {
  return jsonResponse(431, { error: "Request header fields too large" })
}

export function unavailableForLegalReasonsResponse() {
  return jsonResponse(451, { error: "Unavailable for legal reasons" })
}

export function internalServerErrorResponse() {
  return jsonResponse(500, { error: "Internal server error" })
}

export function notImplementedResponse() {
  return jsonResponse(501, { error: "Not implemented" })
}

export function badGatewayResponse() {
  return jsonResponse(502, { error: "Bad gateway" })
}

export function serviceUnavailableResponse() {
  return jsonResponse(503, { error: "Service unavailable" })
}

export function gatewayTimeoutResponse() {
  return jsonResponse(504, { error: "Gateway timeout" })
}

export function httpVersionNotSupportedResponse() {
  return jsonResponse(505, { error: "HTTP version not supported" })
}

export function variantAlsoNegotiatesResponse() {
  return jsonResponse(506, { error: "Variant also negotiates" })
}

export function insufficientStorageResponse() {
  return jsonResponse(507, { error: "Insufficient storage" })
}

export function loopDetectedResponse() {
  return jsonResponse(508, { error: "Loop detected" })
}

export function notExtendedResponse() {
  return jsonResponse(510, { error: "Not extended" })
}

export function networkAuthenticationRequiredResponse() {
  return jsonResponse(511, { error: "Network authentication required" })
}
