import { HttpPaths } from '@/Enums/httpPaths'
import { ILookups } from './_models'

const LookupsData: Array<ILookups> = [
  {
    addApi: HttpPaths.Api_listingType_Upsert,
    deleteApi: HttpPaths.Api_listingType_Delete,
    getApi: HttpPaths.Api_listingType_GetAll,
    toggleApi: HttpPaths.Api_listingType_ToggleIsActive,
    icon: 'fa-solid fa-circle text-sm w-[22px]',
    moduleName: 'Shared',
    routing: '/lookups/listingType',
    menuRouting: '/lookups/listingType',
    title: 'Listing Type',
    columns: [{ field: 'name', header: 'Name' }],
    inputs: [
      {
        name: 'name',
        title: 'Name',
        value: null,
        isInput: true,
        isCheckBox: false,
        isDropDown: false,
        isMultiSelect: false,
        isTextArea: false,
        supplayDataURL: '',
        supplayData: [],
        isRequired: true,
        maxLength: 500,
        minLength: 1,
      },
    ],
    className: 'col-12',
    requireCompanyId: false,
  },
  {
    addApi: HttpPaths.Api_listingCategories_Upsert,
    deleteApi: HttpPaths.Api_listingCategories_Delete,
    getApi: HttpPaths.Api_listingCategories_GetAll,
    toggleApi: HttpPaths.Api_listingCategories_ToggleIsActive,
    icon: 'fa-solid fa-circle text-sm w-[22px]',
    moduleName: 'Shared',
    routing: '/lookups/listingCategories',
    menuRouting: '/lookups/listingCategories',
    title: 'Listing Categories',
    columns: [
      { field: 'name', header: 'Name' },
      { field: 'listingTypeName', header: 'Listing Type' },
    ],
    inputs: [
      {
        name: 'name',
        title: 'Name',
        value: null,
        isInput: true,
        isCheckBox: false,
        isDropDown: false,
        isMultiSelect: false,
        isTextArea: false,
        supplayDataURL: '',
        supplayData: [],
        isRequired: true,
        maxLength: 500,
        minLength: 1,
      },
      {
        name: 'listingType_Id',
        title: 'Listing Type',
        value: null,
        isInput: false,
        isCheckBox: false,
        isDropDown: true,
        isMultiSelect: false,
        isTextArea: false,
        supplayDataURL: HttpPaths.Api_listingType_ListOf,
        supplayData: [],
        isRequired: true,
        maxLength: 500,
        minLength: 1,
      },
    ],
    className: 'col-12',
    requireCompanyId: false,
  },
  {
    addApi: HttpPaths.Api_listingAmenities_Upsert,
    deleteApi: HttpPaths.Api_listingAmenities_Delete,
    getApi: HttpPaths.Api_listingAmenities_GetAll,
    toggleApi: HttpPaths.Api_listingAmenities_ToggleIsActive,
    icon: 'fa-solid fa-circle text-sm w-[22px]',
    moduleName: 'Shared',
    routing: '/lookups/listingAmenities',
    menuRouting: '/lookups/listingAmenities',
    title: 'Amenities',
    columns: [{ field: 'name', header: 'Name' }],
    inputs: [
      {
        name: 'name',
        title: 'Name',
        value: null,
        isInput: true,
        isCheckBox: false,
        isDropDown: false,
        isMultiSelect: false,
        isTextArea: false,
        supplayDataURL: '',
        supplayData: [],
        isRequired: true,
        maxLength: 500,
        minLength: 1,
      },
    ],
    className: 'col-12',
    requireCompanyId: false,
  },
  {
    addApi: HttpPaths.Api_listingEntertainments_Upsert,
    deleteApi: HttpPaths.Api_listingEntertainments_Delete,
    getApi: HttpPaths.Api_listingEntertainments_GetAll,
    toggleApi: HttpPaths.Api_listingEntertainments_ToggleIsActive,
    icon: 'fa-solid fa-circle text-sm w-[22px]',
    moduleName: 'Shared',
    routing: '/lookups/listingEntertainments',
    menuRouting: '/lookups/listingEntertainments',
    title: 'Entertainments',
    columns: [{ field: 'name', header: 'Name' }],
    inputs: [
      {
        name: 'name',
        title: 'Name',
        value: null,
        isInput: true,
        isCheckBox: false,
        isDropDown: false,
        isMultiSelect: false,
        isTextArea: false,
        supplayDataURL: '',
        supplayData: [],
        isRequired: true,
        maxLength: 500,
        minLength: 1,
      },
    ],
    className: 'col-12',
    requireCompanyId: false,
  },
  {
    addApi: HttpPaths.Api_Country_Upsert,
    deleteApi: HttpPaths.Api_Country_Delete,
    getApi: HttpPaths.Api_Country_GetAll,
    toggleApi: HttpPaths.Api_Country_ToggleIsActive,
    icon: 'fa-solid fa-circle text-sm w-[22px]',
    moduleName: 'Shared',
    routing: '/lookups/country',
    menuRouting: '/lookups/country',
    title: 'Country',
    columns: [{ field: 'name', header: 'Name' }],
    inputs: [
      {
        name: 'name',
        title: 'Name',
        value: null,
        isInput: true,
        isCheckBox: false,
        isDropDown: false,
        isMultiSelect: false,
        isTextArea: false,
        supplayDataURL: '',
        supplayData: [],
        isRequired: true,
        maxLength: 500,
        minLength: 1,
      },
    ],
    className: 'col-12',
    requireCompanyId: false,
  },
  {
    addApi: HttpPaths.Api_City_Upsert,
    deleteApi: HttpPaths.Api_City_Delete,
    getApi: HttpPaths.Api_City_GetAll,
    toggleApi: HttpPaths.Api_City_ToggleIsActive,
    icon: 'fa-solid fa-circle text-sm w-[22px]',
    moduleName: 'Shared',
    routing: '/lookups/city',
    menuRouting: '/lookups/city',
    title: 'City',
    columns: [
      { field: 'name', header: 'Name' },
      { field: 'countryName', header: 'Country Name' },
    ],
    inputs: [
      {
        name: 'name',
        title: 'Name',
        value: null,
        isInput: true,
        isCheckBox: false,
        isDropDown: false,
        isMultiSelect: false,
        isTextArea: false,
        supplayDataURL: '',
        supplayData: [],
        isRequired: true,
        maxLength: 500,
        minLength: 1,
      },
      {
        name: 'country_Id',
        title: 'Country Name',
        value: null,
        isInput: false,
        isCheckBox: false,
        isDropDown: true,
        isMultiSelect: false,
        isTextArea: false,
        supplayDataURL: HttpPaths.Api_Country_ListOf,
        supplayData: [],
        isRequired: true,
        maxLength: 500,
        minLength: 1,
      },
    ],
    className: 'col-12',
    requireCompanyId: false,
  },
]

export default LookupsData
