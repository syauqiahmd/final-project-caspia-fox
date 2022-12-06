import { Link, useNavigate } from "react-router-dom";
// import {} from '../store/actions/actionCreator'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProjects, fetchProjectById } from "../store/slices/project";

import Card from "./Card";

export default function TopProject() {
  const { projects, loadingProjects } = useSelector((state) => {
    return state.project;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);
  
  // console.log(projects[2]?);


  // console.log(projects);


  // useEffect(() => {
  //   dispatch(fetchProjectById({ id: 1 }));
  //   console.log(project);
  //   // use useEffect to get and manage project to see what we get in project, use project.id to watch in param useEffect changes data
  // }, [dispatch, project.id]);

  return (
    <div id="topproject">
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column align-items-center title col-lg-12 col-md-6 col-12">
            <h3>Top Project</h3>
            <p>
              Lorem ipsum, lorem ipsum. Kamu makan kacang, aku makan lorem
              ipsum. Lorem ipsum Lorem Ipsum
            </p>
          </div>

          <div className="container col-lg-12 col-md-6 col-12">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-4 col-12">
                <Card title={projects[0]?.title} slug={projects[0]?.id} imgUrl={projects[0]?.imgUrl} category={projects[0]?.Tag.name} username={projects[0]?.User.username} />
              </div>
              <div className="col-lg-4 col-12">
                <Card title={projects[1]?.title} slug={projects[1]?.id} imgUrl={projects[1]?.imgUrl} category={projects[1]?.Tag.name} username={projects[1]?.User.username} />
              </div>
              <div className="col-lg-4 col-12">
                <Card title={projects[2]?.title} slug={projects[2]?.id} imgUrl={projects[2]?.imgUrl} category={projects[2]?.Tag.name} username={projects[2]?.User.username} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
