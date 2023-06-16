export const Loading = () => {
  return (
    <div
      className="fixed left-0 top-0 z-[45] h-screen w-full bg-black/[0.65]"
      data-testid="loading"
    >
      <div className="flex h-screen items-center justify-center space-x-2">
        <div
          className="bg-brand-secondary h-4 w-4 animate-pulse rounded-full"
          data-testid="dot"
        ></div>
        <div
          className="bg-brand-secondary h-4 w-4 animate-pulse rounded-full"
          data-testid="dot"
        ></div>
        <div
          className="bg-brand-secondary h-4 w-4 animate-pulse rounded-full"
          data-testid="dot"
        ></div>
      </div>
    </div>
  )
}
