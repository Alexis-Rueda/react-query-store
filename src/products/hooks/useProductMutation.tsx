import { useMutation } from "@tanstack/react-query"
import { productActions } from ".."

export const useProductMutation = () => {
  const mutation = useMutation({
    mutationFn: productActions.createProduct,
    onSuccess: () => {
      console.log('Producto creado')
    },
    onSettled: () => {
      console.log('Mutación finalizada')
    }
  })

  return mutation;
}
