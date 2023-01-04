import Cell from "./Cell"

export default abstract class Rule<S> {
    public abstract apply: (cell: Cell<S>, neighbors: Cell<S>[]) => S;
}
