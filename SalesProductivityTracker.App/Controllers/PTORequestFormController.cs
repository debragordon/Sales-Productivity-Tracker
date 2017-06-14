﻿using Microsoft.AspNet.Identity;
using SalesProductivityTracker.App.DAL.IRepositories;
using SalesProductivityTracker.App.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace SalesProductivityTracker.App.Controllers
{
    [Authorize]
    public class PTORequestFormController : ApiController
    {
        public IPTORequestFormRepository _repo { get; set; }

        public PTORequestFormController(IPTORequestFormRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        [Route("api/current-employee-id")]
        public int GetCurrentEmployeeId()
        {
            string _currentAspNetUserId = User.Identity.GetUserId();

            return _repo.GetCurrentEmployeeId(_currentAspNetUserId);
        }

        [HttpGet]
        [Route("api/pto-forms")]
        public List<PTORequestForm> Get()
        {
            var forms = _repo.GetAllPTOForms().ToList();
            return forms;
        }

        [HttpGet]
        [Route("api/pto-forms-by-employeeID/{employeeId}")]
        public List<PTORequestForm> GetPTOFormsByEmployeeId(int employeeId)
        {
            var forms = _repo.GetPTOFormsByEmployeeId(employeeId).ToList();
            return forms;
        }

        [HttpGet]
        [Route("api/pto-form")]
        public PTORequestForm GetPTOFormByPTOFormId()
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        [Route("api/pto-form")]
        public PTORequestForm DeletePTOFormByPTOFormId()
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        [Route("api/pto-forms")]
        public void SubmitPTOForm(PTORequestForm ptoForm)
        {
            _repo.SubmitPTOForm(ptoForm);
        }
    }
}