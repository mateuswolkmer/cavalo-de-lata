import { tinaField, useTina } from 'tinacms/dist/react';
import type { PageQuery, PageQueryVariables } from '../../__generated__/types';

type Props = {
  variables: PageQueryVariables;
  data: PageQuery;
  query: string;
};

const HomePage = (props: Props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const page = data?.page;

  return (
    <main>
      <div data-tina-field={tinaField(page, 'body')}>
        <h1>Test heading</h1>
      </div>
    </main>
  );
};

export default HomePage;
