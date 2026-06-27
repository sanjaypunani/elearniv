"use client";

import dateFormat from "@/utils/dateFormat";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Content = ({ enrolments, lang }) => {
	return (
		<>
			<div className="checkout-area ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">My Enrolments</h2>
					<div className="row justify-content-center">
						{enrolments.length > 0
							? enrolments.map((enrol) => (
									<div
										className="col-lg-9 col-md-12"
										key={enrol.id}
									>
										<div className="shopping-cart">
											<div className="shopping-cart-list">
												<div className="row align-items-center">
													<div className="col-lg-3">
														<Link
															href={`/${lang}/learning/course/${enrol.course.slug}/${enrol.courseId}`}
															className="d-block image"
														>
															<Image
																src={
																	enrol.course
																		.image
																}
																width={599}
																height={700}
																alt="image"
															/>
														</Link>
													</div>

													<div className="col-lg-6">
														<div className="content">
															<h3>
																<Link
																	href={`/${lang}/learning/course/${enrol.course.slug}/${enrol.courseId}`}
																>
																	{
																		enrol
																			.course
																			.title
																	}
																</Link>
															</h3>

															<p className="fs-14 mb-2">
																By{" "}
																{
																	enrol.course
																		.user
																		.name
																}
															</p>

															<ul className="list">
																<li>
																	{
																		enrol
																			.course
																			.duration
																	}
																</li>
																<li>
																	{
																		enrol
																			.course
																			.lessons
																	}
																</li>
																<li>
																	{
																		enrol
																			.course
																			.access_time
																	}
																</li>
															</ul>
														</div>
													</div>

													<div className="col-lg-3 col-6">
														<div className="price text-end">
															<span className="fw-bolder fs-14 d-block text-muted">
																{dateFormat(
																	enrol.created_at
																)}
															</span>
															<Link
																href={`/${lang}/learning/course/${enrol.course.slug}/${enrol.courseId}`}
																className="default-btn-style-3 d-inline-block mt-2"
															>
																Start Learning{" "}
																<span></span>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
							  ))
							: <div className="col-12 text-center py-5">
								<p className="fs-16 text-muted">You have not enrolled in any courses yet.</p>
								<Link href={`/${lang}/courses`} className="default-btn mt-3">
									Browse Courses <span></span>
								</Link>
							</div>}
					</div>
				</div>
			</div>
		</>
	);
};

export default Content;
