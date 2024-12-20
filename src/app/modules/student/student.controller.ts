
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { StudentServices } from './student.service';
import catchAsync from '../../utils/catchAsysnc';




// api has been transferred in user controller


const getSingleStudent  = catchAsync( async (req, res) => {

    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } 
);

const getAllStudents  = catchAsync(async (req, res) => {
 
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student are retrieved succesfully',
      data: result,
    });
});



const updateStudent  = catchAsync ( async (req, res) => {

    const { studentId } = req.params;
    const {student} =  req.body
    const result = await StudentServices.updateStudentIntomDB(studentId, student);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student has been deleted succesfully',
      data: result,
    });
}
);


const deleteStudent  = catchAsync ( async (req, res) => {

    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    });
}
);

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
