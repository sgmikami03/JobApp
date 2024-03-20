export type PageStateTop = { 
  jobs: {
    id: string;
    title: string;
    detail: string;
  }[]
}

export const initialPageStateTop = { 
  jobs: [{id: "1", title: "title", detail: "detail"}] 
} satisfies PageStateTop

export const pathTop = '/'