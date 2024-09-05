/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
import { ReactNode } from 'react'
import { Column } from 'primereact/column'
import { Tag } from 'primereact/tag'
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { Button } from 'primereact/button'
import { IListing } from '@domains/IListing'
import ToggleButton from '@components/ToggleButton'
import { DataTable } from 'primereact/datatable'
import { deleteListing, toggleListing } from '@apis/listing/apis'

type Props = {
  onEdit: (data: IListing) => void
  onView: (data: IListing) => void
  listings: IListing[]
}

export default function ListingsDataTable({ onEdit, onView ,listings }: Props) {
  const queryClient = useQueryClient()
  const { mutate: toggleListingMutation } = useMutation({
    mutationKey: ['toggleListing'],
    mutationFn: (id: number) => toggleListing(id),
    onSuccess(res) {
      toast.success(res.message)
      queryClient.invalidateQueries({ queryKey: ['getAllListings'] })
    },
  })

  const { mutate: deleteListingMutation } = useMutation({
    mutationKey: ['deleteListing'],
    mutationFn: (id: number) => deleteListing(id),
    onSuccess(res) {
      toast.success(res.message)
      queryClient.invalidateQueries({ queryKey: ['getAllListings'] })
    },
  })

  const statusBodyTemplate = (data: IListing): ReactNode => (
    <Tag
      value={data.isActive ? 'Active' : 'Not Active'}
      severity={data.isActive ? 'success' : 'danger'}
    />
  )


  const reject = () => {}

  const togglePopUp = (event: any, data: IListing) => {
    if (data) {
      confirmPopup({
        target: event.currentTarget,
        message: `Are you sure you want to ${
          data.isActive ? 'Deactivate' : 'Activate'
        } ${data.overview}?`,
        icon: 'pi pi-exclamation-triangle',
        defaultFocus: 'accept',
        accept: () => {
          toggleListingMutation(data.id)
        },
        reject,
      })
    }
  }

  const deletePopUp = (event: any, data: IListing) => {
    confirmPopup({
      target: event.currentTarget,
      message: `Are you sure you want to delete ${data.overview}?`,
      icon: 'pi pi-exclamation-triangle',
      defaultFocus: 'accept',
      accept: () => deleteListingMutation(data.id),
      reject,
    })
  }

  const actionTemplate = (rowData: IListing) => (
    <div className="flex justify-between w-full">
      <ToggleButton
        isActive={rowData.isActive}
        onClick={e => togglePopUp(e, rowData)}
      />

      <Button
        icon="pi pi-trash"
        rounded
        text
        raised
        aria-label="Filter"
        tooltipOptions={{ position: 'bottom' }}
        tooltip="Delete"
        severity="danger"
        onClick={e => {
          deletePopUp(e, rowData)
        }}
        className="me-4"
      />
      <Button
        icon="pi pi-pencil"
        rounded
        text
        raised
        aria-label="Filter"
        tooltipOptions={{ position: 'bottom' }}
        tooltip="Edit"
        severity="info"
        className="me-4"
        onClick={() => onEdit(rowData)}
      />
      <Button
        icon="pi pi-eye"
        rounded
        text
        raised
        aria-label="Filter"
        tooltipOptions={{ position: 'bottom' }}
        tooltip="View"
        severity="secondary"
        className="me-4"
        onClick={() => onView(rowData)}
      />
    </div>
  )

  return (
    <div className="mt-4">
      <div className="table-container" style={{ position: 'relative' }}>
        <DataTable
          value={listings ?? []}
          paginator
          rows={10}
          rowsPerPageOptions={[10, 25, 50]}
          className="data-table-custom"
        >
          <Column field={'name'} header={'Name'} />
          <Column field="supplierName" header={'Supplier Name'} />
          <Column field="listingTypeName" header={'Listing Type'} />
          <Column field="listingCategoryName" header={'Listing Category'} />
          <Column
            field="price"
            header={'Price'}
            body={x => <div>{x.price} AED</div>}
          />
          <Column
            className="w-[100px]"
            field="isActive"
            header={'Status'}
            body={rowData => statusBodyTemplate(rowData)}
          />
          <Column
            field="Action"
            header={'actions'}
            body={rowData => actionTemplate(rowData)}
            className='w-[300px]'
          />
        </DataTable>
      </div>
      <ConfirmPopup />
    </div>
  )
}
