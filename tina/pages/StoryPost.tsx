import React from 'react';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { FormattedDate } from '../../src/components/react/FormattedDate.tsx';
import type {
  StoriesQuery,
  StoriesQueryVariables,
} from '../__generated__/types';

type Props = {
  variables: StoriesQueryVariables;
  data: StoriesQuery;
  query: string;
};

export const StoryPost = (props: Props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const story = data.stories;

  return (
    <article>
      <div data-tina-field={tinaField(story, 'heroImage')}>
        {story.heroImage && (
          <img width={1020} height={510} src={story.heroImage} alt="" />
        )}
      </div>
      <div>
        <div>
          <div data-tina-field={tinaField(story, 'pubDate')}>
            <FormattedDate date={story.pubDate} />
            {story.updatedDate && (
              <div data-tina-field={tinaField(story, 'updatedDate')}>
                Last updated on <FormattedDate date={story.updatedDate} />
              </div>
            )}
          </div>
          <h1 data-tina-field={tinaField(story, 'title')}>{story.title}</h1>
          <hr />
        </div>
        <div data-tina-field={tinaField(story, 'body')}>
          <TinaMarkdown content={story.body} />
        </div>
      </div>
    </article>
  );
};
