import React from 'react';
import Layout from '../components/Layouts/Layout';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <Layout>
    <section>
      <div className="container wrap">
        <div className="row center-xs vh-100 middle-xs">
          <div className="col-xs-12 col-sm-6">
            <h1 className="secondary">Siden kunne ikke findes :(</h1>
            <Link to="/">Tilbage til forsiden</Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage