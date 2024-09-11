export interface IUseCase<P, R> {
  execute(...params: P[]): Promise<R>;
}
