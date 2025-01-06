import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../store/store";
import { useFormSliceInit } from "../useFormSliceInit";
import { useAuthCheck } from "../../auth/hooks/useAuthCheck";
import TodoForm from "../components/TodoForm";


interface RootStateWithTest extends RootState {
    test?: {
      todos: {id:number;title:string}[];
    };
  
  }
  const defaultTestState = { todos: [] };
  
  export default function TestPage() {
    useFormSliceInit(); // inject test slice if not present
  
    const dispatch = useDispatch();
  
    // Provide stable fallback
    const testState =
      useSelector((state: RootStateWithTest) => state.test) || defaultTestState;
  
    const { isAuthorized, isLoading } = useAuthCheck({
      requiredRoles: [], // e.g. ["manager"]
      requiredPermissions: [], // e.g. ["read:report"]
    });
  
    if (isLoading) {
      return <div>Verifying access...</div>;
    }
    if (!isAuthorized) {
      return (
        <div className="text-red-500">You are not authorized for this route.</div>
      );
    }
  
    return (
      <main className="p-4 flex flex-col gap-4">
          <TodoForm />
      </main>
    );
  }