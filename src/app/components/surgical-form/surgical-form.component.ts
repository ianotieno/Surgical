import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormContent } from 'src/app/interfaces/form-content';

@Component({
  selector: 'app-surgical-form',
  templateUrl: './surgical-form.component.html',
  styleUrls: ['./surgical-form.component.css']
})
export class SurgicalFormComponent {
  constructor(private formBuilder: FormBuilder) { }

  formContents: Array<FormContent> = [
    { type: 'sectionTitle', title: 'PLEASE BE AS COMPREHENSIVE AND ACCURATE AS POSSIBLE WHEN COMPLETING THIS FORM. ERRORS OR OMMISSIONS MAY DELAY APPROVAL.'},
    { type: 'sectionTitle', title: 'SECTION 1: PATIENT INFORMATION (to befilled by the Patient/Guardian)' },
    { type: 'text', name: 'patientName', placeHolder: 'Enter patient name', label: 'Patient Name?' },
    { type: 'text', name: 'County', placeHolder: 'County', label: 'County' },
    { type: 'text', name: 'NHIF', placeHolder: 'Enter NHIF Member No:', label: 'NHIF Member No:' },
    { type: 'text', name: 'IdNo', placeHolder: 'Patients ID No/Birth Cert/Notification No:', label: 'Patients ID No/Birth Cert/Notification No:' },
    { type: 'text', name: 'PhoneNo', placeHolder: 'Patients Phone No:', label: 'Patients Phone No:' },
    {type: 'checkbox', name: 'Relationship', label: "Relationship to Principal Member: ", options: [
      {value: 'Self',  label: 'Self: ',  checked: false},
      {value: 'Spouse',  label: 'Spouse',  checked: false},
      {value: 'Child', label: 'Child',  checked: false},
    ]},
    { type: 'text', name: 'PrincipalMember', placeHolder: 'Principal Member Phone No:', label: 'Principal Member Phone No:' },
    { type: 'text', name: 'Guardian', placeHolder: 'Enter Name of Guardian:', label: 'If patient is below 18 years,Enter Name of Guardian:' },
    { type: 'text', name: 'RPatient', placeHolder: 'Relationship to patient', label: 'Relationship to patient:' },
    {
      type: 'radios', name: 'MEDICALinsurance', label: "Do you have any other MEDICAL insurance cover?", options: [
        { label: 'Yes', value: 'MEDICALinsurance', checked: false },
        { label: 'No', value: 'MEDICALinsurance', checked: true },
      ]
    },
    { type: 'text', name: 'MEDICALinsurance', placeHolder: 'If yes Please specify', label: 'If yes Please specify' },
    {type: 'sectionTitle', title: 'PATIENT OR AUTHORISED PERSONS DECLARATION:'},
    {type: 'sectionTitle', title: 'I certify that the above information is correct and give specific consent for surgery to be done. I understand that it is an offence to knowingly make any false statement for purposes of obtaining any benefit under NHIF Act.'},
    { type: 'textarea', name: 'Signature', placeHolder: 'Signature :', label: 'Signature :' },
    { type: 'date', name: 'date', label: 'Enter a Date:', hint: 'MM/DD/YYYY' },

    {type: 'sectionTitle', title: 'SECTION 2: HOSPITAL INFORMATION:'},
    { type: 'text', name: 'HospitalName', placeHolder: 'Hospital Name:', label: 'Hospital Name:' },
    { type: 'text', name: 'HospitalCode', placeHolder: 'Hospital Code:', label: 'Hospital Code:' },
    { type: 'text', name: 'PhoneNo', placeHolder: 'Phone No:', label: 'Phone No:' },
    { type: 'text', name: 'FacilityLevel', placeHolder: 'Facility Level:', label: 'Facility Level:' },

    {type: 'sectionTitle', title: 'Hospital Representative Information'},
    { type: 'text', name: 'Name', placeHolder: 'Enter name  ', label: 'Enter name ' },
    { type: 'text', name: 'IdNo', placeHolder: 'Id No :', label: 'Id No:' },
    { type: 'text', name: 'Designation', placeHolder: 'Designation', label: 'Designation' },
    { type: 'text', name: 'Diagnosis', placeHolder: 'Provisional Diagnosis ', label: 'Provisional Diagnosis:' },
    { type: 'text', name: 'Designation', placeHolder: 'CD-10', label: 'CD-10' },
    {
      type: 'radios', name: 'Coinsured', label: "Is the member Co-insured?", options: [
        { label: 'Yes', value: 'Coinsured', checked: false },
        { label: 'No', value: 'Coinsured', checked: true },
      ]
    },
    { type: 'text', name: 'Coinsured', placeHolder: 'If yes Please specify', label: 'If yes Please specify' },
    {
      type: 'radios', name: 'Comprehensively', label: "The Beneficiary is eligible for this benefit:", options: [
        { label: 'Yes', value: 'Comprehensively', checked: false },
        { label: 'No', value: 'Non-Comprehensively', checked: true },
      ]
    },
    { type: 'textarea', name: 'proformainvoice', placeHolder: 'Cost of procedure: (Attach pro-forma invoice)', label: 'Cost of procedure: (Attach pro-forma invoice):' },
    {type: 'sectionTitle', title: 'HOSPITAL DECLARATION:'},
    {type: 'sectionTitle', title: ' This is to certify that to the best of my knowledge,the information contained in this form, and any attachments provided is true, accurate, and complete and the requested service(s) is necessary to the health of the patient. I understand that it is an offence to knowingly make any false statement for purposes of obtaining any benefit under NHIF Act '},
    { type: 'textarea', name: 'Signature', placeHolder: 'Signature :', label: 'Signature :' },
    { type: 'date', name: 'date', label: 'Enter a Date:', hint: 'MM/DD/YYYY' },

    {type: 'sectionTitle', title: 'SECTION 3: PRACTITIONERS DECLARATION-SURGEON'},
    { type: 'textarea', name: 'SurgicalProcedure', placeHolder: 'Surgical Procedure requested for:', label: 'Surgical Procedure requested for:' },
    { type: 'textarea', name: 'ClinicalIndication', placeHolder: 'Clinical Indication for the procedure:', label: 'Clinical Indication for the procedure:' },
    {type: 'sectionTitle', title: 'Procedure Code'},
    {type: 'date', name: 'Requestdate', label: 'Request date ', hint: 'MM/DD/YYYY'},
    {type: 'date', name: 'ScheduledDate', label: 'Scheduled Date ', hint: 'MM/DD/YYYY'},


    {type: 'sectionTitle', title: 'Is the patients condition related to:'},
    {
      type: 'radios', name: 'patientscondition', label: "A) Employment:", options: [
        { label: 'Yes', value: 'patientscondition', checked: false },
        { label: 'No', value: 'patientscondition', checked: true },
      ]
    },
    {
      type: 'radios', name: 'patientscondition', label: "B) Auto or other Accident:", options: [
        { label: 'Yes', value: 'patientscondition', checked: false },
        { label: 'No', value: 'patientscondition', checked: true },
      ]
    },

    { type: 'text', name: 'Name', placeHolder: 'Enter name  ', label: 'Enter name ' },
    { type: 'text', name: 'SurgicalSpeciality', placeHolder: 'Surgical speciality: ', label: 'Surgical speciality: ' },
    { type: 'text', name: 'KMPDC', placeHolder: 'KMPDC Reg. No', label: 'KMPDC Reg. No:' },
    { type: 'text', name: 'IdNo', placeHolder: 'Id No :', label: 'Id No:' },
    { type: 'text', name: 'PhoneNo', placeHolder: 'Phone No:', label: 'Phone No:' },

    {type: 'sectionTitle', title: 'PRACTITIONER DECLARATION:'},
    {type: 'sectionTitle', title: 'This is to certify that the intended surgical procedure is rightly indicated for the presenting condition of the beneficiary and the desired outcome shall be of value in managing the condition. Attached is evidence supporting the decision to perform the operation following review by myself.'},
    {
      type: 'checkbox', name: 'RadiologicalExam', label: "(tick as appropriate) : ", options: [
        { label: 'Radiological exam', value: 'RadiologicalExam', checked: false },
        { label: 'Laboratory tests ', value: 'RadiologicalExam', checked: false },
        { label: 'Case Summary', value: 'RadiologicalExam', checked: false },
      ]
    },
    { type: 'textarea', name: 'Signature', placeHolder: 'Signature :', label: 'Signature :' },
    { type: 'date', name: 'date', label: 'Enter a Date:', hint: 'MM/DD/YYYY' },

    {type: 'sectionTitle', title: 'SECTION 4: PRACTITIONERS DECLARATION-ANAESTHESIST '},
    { type: 'textarea', name: 'SurgicalProcedure', placeHolder: 'Surgical Procedure requested for:', label: 'Surgical Procedure requested for:' },
    {
      type: 'checkbox', name: 'anaesthesia', label: "Type of anaesthesia :", options: [
        { label: 'General anaesthesia', value: 'anaesthesia', checked: false },
        { label: 'Spinal Block ', value: 'anaesthesia', checked: false },
        { label: 'Spinal Block ', value: 'anaesthesia', checked: false },
        { label: 'Sedation ', value: 'anaesthesia', checked: false },
      ]
    },
    { type: 'text', name: 'Name', placeHolder: 'Enter name  ', label: 'Enter name ' },
    { type: 'text', name: 'SurgicalSpeciality', placeHolder: 'Surgical speciality: ', label: 'Surgical speciality: ' },
    { type: 'text', name: 'KMPDC', placeHolder: 'KMPDC Reg. No', label: 'KMPDC Reg. No:' },
    { type: 'text', name: 'IdNo', placeHolder: 'Id No :', label: 'Id No:' },
    { type: 'text', name: 'PhoneNo', placeHolder: 'Phone No:', label: 'Phone No:' },


    {type: 'sectionTitle', title: 'PRACTITIONER DECLARATION:'},
    {type: 'sectionTitle', title: 'This is to certify that the anaesthesia method selected is approved for the presenting condition of the beneficiary contingent to review by myself:'},
    { type: 'textarea', name: 'Signature', placeHolder: 'Signature :', label: 'Signature :' },
    { type: 'date', name: 'date', label: 'Enter a Date:', hint: 'MM/DD/YYYY' },
    

    {type: 'sectionTitle', title: 'Notice: '},
    {type: 'sectionTitle', title: 'Any person/institution who/which knowingly files a statement of request or claim containing any misrepresentation or false, incomplete, or misleading information may be guilty of medical fraud punishable under law or as per the statutes of NHIF operation.'},
    {type: 'sectionTitle', title: 'PAll fields in this form are mandatory aJ  MUST be completed to inform pre-a"uthorization decision.'},
    {type: 'sectionTitle', title: 'Clinical justification an r s ·lts ,M pjelimifiarydi g g tic examinations, where necessary, shall accompany the request.'},
    {type: 'sectionTitle', title: 'Payment for services rendered is subject to verification of outcomes of care and beneficiary eligibility as at the date of service provision. Contractual obligations with the provider take precedence.Medical co-insurance declaration is Mandatory. failure to which approval will be withheld or monies recovered in case of falsification to obtain benefits.'},
    {type: 'sectionTitle', title: 'PATIENT OR AUTHORISED PERSONS DECLARATION:'},
    {type: 'sectionTitle', title: ' This declaration provides that the Principal member and beneficiary details are accurate and complete as per the form. that the medical information and treatment plan herein is accurate and can be utilized for medical insurance purposes.'},
    {type: 'sectionTitle', title: 'HOSPITAL DECLARATION:'},
    {type: 'sectionTitle', title: 'This declaration provides that the hospital is declared and contracted, and is operational under the provisions on location, hospital code and contracted services. It also provides that the member/beneficiary is eligible for access to the contracted benefits as per the clauses on "OBLIGATIONS OF THE HEALTH FACILITY", and the terms of engagement. It also provides that the hospital has taken due diligence to identify the beneficiary and provided necessary details on the eligible benefits and financial liability.'},
    {type: 'sectionTitle', title: 'PRACTITIONER DECLARATION:'},
    {type: 'sectionTitle', title: 'The listed beneficiary has presented to the practitioner for clinical management and that the practitioner is duly qualified and registered by the relevant authority in Kenya.'},
    {type: 'sectionTitle', title: 'THEATRE LIST:'},
    {type: 'sectionTitle', title: ' All surgical requests must have an attached theatre List'},
  ] 

    SurgicalForm = this.formBuilder.group({
      patientName: ['', Validators.required],
      County: ['', Validators.required],
      NHIF: ['', Validators.required],
      IdNo: ['', Validators.required],
      PhoneNo:['', Validators.required],
      Relationship:['', Validators.required],
      PrincipalMember:['', Validators.required],
      MEDICALinsurance:['', Validators.required],
      Signature:['', Validators.required],
      date:['', Validators.required],
      HospitalName:['', Validators.required],
      HospitalCode:['', Validators.required],
      FacilityLevel:['', Validators.required],
      Name:['', Validators.required],
      Designation:['', Validators.required],
      Diagnosis:['', Validators.required],
      Coinsured:['', Validators.required],
      Comprehensively:['', Validators.required],
      proformainvoice:['', Validators.required],
      SurgicalProcedure:['', Validators.required],
      ClinicalIndication:['', Validators.required],
      Requestdate:['', Validators.required],
      ScheduledDate:['', Validators.required],
      patientscondition:['', Validators.required],
      SurgicalSpeciality:['', Validators.required],
      KMPDC:['', Validators.required],
      RadiologicalExam:['', Validators.required],
      anaesthesia:['', Validators.required],
    });

      onSave() {

      }
}
