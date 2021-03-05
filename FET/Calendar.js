var today = new Date();
var today_formatted = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + ('0' + today.getDate()).slice(-2);
var split_days = [];
var dots_days = [{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "2909c110-f352-4171-80cf-4a8e1804d003",
  "odata.etag": "\"7\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(35)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(35)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "a9b38ee9-7532-4b42-abe2-98d2ef68f427",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-03-01T08:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "b44ef0ad-0f95-4c85-bb35-a5705a0c75cd",
  "odata.etag": "\"7\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(36)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(36)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "80e471dd-f4ae-4928-b193-f6bc6b7b2072",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-03-08T08:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "5469d2fd-0b90-40db-977e-4429964f8a99",
  "odata.etag": "\"7\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(37)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(37)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "7a09cbbd-86a9-41a4-bc83-1ab6c7621be3",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-03-15T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "766efecd-4c8c-4498-a641-595371aa5d75",
  "odata.etag": "\"3\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(38)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(38)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "e0d9e467-87a5-4ddf-84b6-48d1d8a8d4cb",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-03-22T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "3b84a668-6420-4ba6-9910-53af0ce8e846",
  "odata.etag": "\"3\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(39)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(39)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "d3e9c04f-c183-4ae7-8470-42c9810b3e94",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-03-26T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "35d83b6e-acd6-4a58-a787-5662ec87d18f",
  "odata.etag": "\"2\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(40)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(40)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "fa726135-fa3a-4cb0-ad37-4ee5d5f0c150",
    "kiar": "#26C1C9",
    "Title": "GM Approval"
  },
  "Title": null,
  "EventDate": "2021-03-05T08:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "a54875a8-15d4-4146-82d7-b7cc30956ef2",
  "odata.etag": "\"2\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(41)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(41)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "32a1b269-207c-49e4-b5b2-e824a5aa88b6",
    "kiar": "#26C1C9",
    "Title": "GM Approval"
  },
  "Title": null,
  "EventDate": "2021-03-12T08:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "b7dcb03e-5d20-4361-9b4a-3e095d208cd7",
  "odata.etag": "\"4\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(42)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(42)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "990c724a-4baa-41e3-99f7-0e5287102297",
    "kiar": "#26C1C9",
    "Title": "GM Approval"
  },
  "Title": null,
  "EventDate": "2021-03-19T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "945e2e9e-4ac3-4166-8573-e3823c2c60d3",
  "odata.etag": "\"2\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(43)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(43)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "061ea5c5-abd4-4995-ae38-d982633922ad",
    "kiar": "#26C1C9",
    "Title": "GM Approval"
  },
  "Title": null,
  "EventDate": "2021-03-26T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "44266bf2-8e7f-459b-a24c-29fc7574fdf1",
  "odata.etag": "\"3\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(44)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(44)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "288b93d5-bb44-48cd-a82b-0e589573f6bf",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-04-05T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "00dd1a6e-1c9a-43d0-8a8c-82d52521256f",
  "odata.etag": "\"3\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(45)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(45)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "cbdd3fa2-f8b6-4c45-a3f2-3772bba22453",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-04-12T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "2cbcc06c-eb46-40e1-a08c-7cb8f8616898",
  "odata.etag": "\"5\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(47)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(47)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "c4cdf25f-9734-47d9-ba40-e22afebc9b63",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-03-26T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "c114463d-e745-42ee-a647-57a2c5335810",
  "odata.etag": "\"4\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(48)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(48)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "674b13b9-7418-455b-85bc-0164e88c2e3f",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-04-05T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "03e47cdc-34a4-499c-b4d5-e161bf13609c",
  "odata.etag": "\"4\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(49)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(49)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "fe3877bb-01b3-4d74-afe8-233fd8a3b11e",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-04-12T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "34a09396-c6e7-4674-aff0-3b847c64f3a3",
  "odata.etag": "\"4\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(50)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(50)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "ca62a1ff-4901-44a8-8b9b-8f3a6ba7a411",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-04-19T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "24fdab46-0d89-4add-a5af-93188c2386ae",
  "odata.etag": "\"5\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(51)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(51)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "a2f54b99-e874-4b85-8e39-34a741496364",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-04-26T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "fd173d1f-bb25-474f-903b-62eb62d75f0f",
  "odata.etag": "\"3\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(52)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(52)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "b654c23f-52be-4e89-83a6-cb1d6e83c340",
    "kiar": "#26C1C9",
    "Title": "GM Approval"
  },
  "Title": null,
  "EventDate": "2021-04-01T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "46aa82bc-f196-4f5b-8e8d-92b3c0c99fda",
  "odata.etag": "\"2\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(53)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(53)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "ceeade3f-95dd-418f-950c-ee9c5ea102af",
    "kiar": "#26C1C9",
    "Title": "GM Approval"
  },
  "Title": null,
  "EventDate": "2021-04-09T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "d1af06a4-96b0-4ee2-8cce-e5ceaf242742",
  "odata.etag": "\"2\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(54)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(54)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "40874306-66f6-47cb-ae05-ab8be6bbe5d9",
    "kiar": "#26C1C9",
    "Title": "GM Approval"
  },
  "Title": null,
  "EventDate": "2021-04-16T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "310dcbfd-22a3-435f-a8cd-e52f4c429fc9",
  "odata.etag": "\"2\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(55)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(55)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "2f18d63e-666c-4c7f-96f9-6f2f685aa617",
    "kiar": "#26C1C9",
    "Title": "GM Approval"
  },
  "Title": null,
  "EventDate": "2021-04-23T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "c9c2c163-2bf5-4486-929e-7260f85beafb",
  "odata.etag": "\"2\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(56)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(56)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "206869b4-1b29-425b-9e8a-ea8d46f0e4ea",
    "kiar": "#26C1C9",
    "Title": "GM Approval"
  },
  "Title": null,
  "EventDate": "2021-04-30T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "6e31fe45-abbb-41f5-a09c-e50dc7029f0f",
  "odata.etag": "\"2\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(57)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(57)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "e8bff1c7-edf0-4c51-9072-69d5f9c3e869",
    "kiar": "#FFC31C",
    "Title": "US Holidays"
  },
  "Title": "Good Friday (DRC only)",
  "EventDate": "2021-04-02T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "e1daba92-2465-455a-b247-48db5d30fa7a",
  "odata.etag": "\"3\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(58)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(58)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "d41bcf77-0033-47d0-9f54-766a0162d90d",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-05-03T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "fc6b97da-42a5-47dc-a3d7-668659b2eb5f",
  "odata.etag": "\"3\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(59)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(59)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "7d76cdc3-0f20-43a1-a77d-dc01c5e56e5e",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-05-10T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "b079f4c5-cf9d-4e86-b9d9-ab66432c12d3",
  "odata.etag": "\"3\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(60)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(60)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "a47743b1-d7f3-4d39-83c4-d17954353a81",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-05-17T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "aee4b3fc-3891-4514-b32d-8027c678420e",
  "odata.etag": "\"3\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(61)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(61)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "7e26b344-e576-4702-b99c-00d2a7200a21",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-05-24T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "f044efd5-a146-4a55-a0ac-6637d4af7f9e",
  "odata.etag": "\"3\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(62)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(62)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "5edc4860-89a9-4f7f-9a0e-1b1db4b21798",
    "kiar": "#AB7DF6",
    "Title": "PO Cut-Offs"
  },
  "Title": "PO-Cutoff",
  "EventDate": "2021-05-28T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "e3306086-ec25-4810-94a6-111b66eef907",
  "odata.etag": "\"2\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(63)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(63)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "441d1510-ae1f-4d8f-a341-45626a74243d",
    "kiar": "#26C1C9",
    "Title": "GM Approval"
  },
  "Title": null,
  "EventDate": "2021-05-07T07:00:00Z"
},
{
  "odata.type": "SP.Data.CalenderEventsDataListItem",
  "odata.id": "25f3e2bd-a0e2-4bda-bbe8-c3e0f69c7c43",
  "odata.etag": "\"2\"",
  "odata.editLink": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(64)",
  "EventType@odata.navigationLinkUrl": "Web/Lists(guid'3398acfa-80a4-442b-b55c-09cb1708d8bd')/Items(64)/EventType",
  "EventType": {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "791a2ba3-16c7-455d-9ce8-380aef37d9c1",
    "kiar": "#26C1C9",
    "Title": "GM Approval"
  },
  "Title": null,
  "EventDate": "2021-05-14T07:00:00Z"
}];
var colors =  [
  {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "ee8360b6-8826-4011-9e88-5ce1249a0342",
    "odata.etag": "\"2\"",
    "odata.editLink": "Web/Lists(guid'dc2bd96d-a6e7-4f0c-9157-70d1b13bbe1e')/Items(1)",
    "Title": "GM Approval"
  },
  {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "60f4fd00-c45f-48e8-8ff5-8ea3759f37f2",
    "odata.etag": "\"4\"",
    "odata.editLink": "Web/Lists(guid'dc2bd96d-a6e7-4f0c-9157-70d1b13bbe1e')/Items(2)",
    "Title": "PO Cut-Offs"
  },
  {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "09132924-fd71-45dd-919b-6ff552af46c7",
    "odata.etag": "\"2\"",
    "odata.editLink": "Web/Lists(guid'dc2bd96d-a6e7-4f0c-9157-70d1b13bbe1e')/Items(3)",
    "Title": "US Holidays"
  },
  {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "ea25c103-ee53-41c2-b441-e4181f7a7d4e",
    "odata.etag": "\"1\"",
    "odata.editLink": "Web/Lists(guid'dc2bd96d-a6e7-4f0c-9157-70d1b13bbe1e')/Items(4)",
    "Title": "Test 01"
  },
  {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "9a523c6a-63b9-4d20-9265-c8647edc9ec5",
    "odata.etag": "\"2\"",
    "odata.editLink": "Web/Lists(guid'dc2bd96d-a6e7-4f0c-9157-70d1b13bbe1e')/Items(5)",
    "Title": "Test 02"
  },
  {
    "odata.type": "SP.Data.CalenderEventsColorCodeListItem",
    "odata.id": "cfdd3c57-5536-4d27-a87d-c0cb4784732e",
    "odata.etag": "\"2\"",
    "odata.editLink": "Web/Lists(guid'dc2bd96d-a6e7-4f0c-9157-70d1b13bbe1e')/Items(6)",
    "Title": "Test 03"
  }
];

function bindCalendar() {
  console.log('bindCalendar loaded');
  $('#calendar').datepicker({
    format: "mm/dd/yyyy",
    weekStart: 1,

    beforeShowDay: function (date) {
      var calender_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + ('0' + date.getDate()).slice(-2);
      var classes = "";
      var dotsHtml = "";

      var todayEvent = dots_days.filter(e => {
        var event = new Date(e.EventDate.split("T")[0]);
        var event_formatted = event.getFullYear() + '-' + (event.getMonth() + 1) + '-' + ('0' + event.getDate()).slice(-2);

        if (event_formatted === calender_date) {
          return true;
        }
      });

      if (todayEvent.length > 0) {
        var firstColour = todayEvent.filter(e => e.EventType.Title === colors[0].Title);
        var secondColour = todayEvent.filter(e => e.EventType.Title === colors[1].Title);
        if (firstColour.length > 0 && secondColour.length === 0) {
          classes = 'style="background-color:' + firstColour[0].EventType.kiar + '"';
        } else if (firstColour.length == 0 && secondColour.length > 0) {
          classes = 'style="background-color:' + secondColour[0].EventType.kiar + '"';
        } else if (firstColour.length > 0 && secondColour.length > 0) {
          classes = 'style="background-image: -webkit-linear-gradient(-45deg, ' + secondColour[0].EventType.kiar + ' 50%, ' + firstColour[0].EventType.kiar + ' 50%);"'
        }

        dotsHtml = todayEvent.reduce((final, curr) => {
          if (curr.EventType.Title === colors[0].Title || curr.EventType.Title === colors[1].Title) {
            return final;
          } else {
            return final + '<p class="text-center p-dot"><span style="background-color: ' + curr.EventType.kiar + ';" class="single-dot"></span></p>';
          }
        }, "");
      }

      return {
        classes: "custom-day",
        content: '<div ' + classes + ' class="event-container">' +
          '<div class="meta-events">' +
          '<div class="top-single-dots-container">' +
          dotsHtml +
          '</div>' +
          '</div>' +
          '<div class="day calendar-date">' +
          date.getDate() +
          '</div>' +
          '</div>'
      }
    }
  });
}


// https://hitachigroup.sharepoint.com/sites/HAL_RD_Portal_Dev/_api/web/lists/getbytitle('CalenderEventsData')/Items?$select=Title,EventDate,EventType/kiar,EventType/Title&$expand=EventType/Id

function getJsonDataAsync(url) {
  var deferred = $.Deferred();
  var requestHeaders = { Accept: "application/json; odata=verbose" };
  $.ajax({
    url: url, // The file path.
    method: "GET",
    headers: requestHeaders,
    success: function (data) {
      deferred.resolve(data);
    },
    error: function (error) {
      deferred.reject(error);
    }
  });
  return deferred;
}

// function init() {
//   getJsonDataAsync("https://hitachigroup.sharepoint.com/sites/HAL_RD_Portal_Dev/_api/web/lists/getbytitle('CalenderEventsColorCode')/Items?$select=Title")
//   .then(clrs=>{
//     console.log(clrs);
//     colors=clrs.d.results;
//     getJsonDataAsync("https://hitachigroup.sharepoint.com/sites/HAL_RD_Portal_Dev/_api/web/lists/getbytitle('CalenderEventsData')/Items?$select=Title,EventDate,EventType/kiar,EventType/Title&$expand=EventType/Id")
//     .then(data => {
//       console.log(data);
//       dots_days = data.d.results;
//       bindCalendar();
//     }).fail(e => {
//       console.log(e);
//     });
//   });
// }
// init();
bindCalendar();
