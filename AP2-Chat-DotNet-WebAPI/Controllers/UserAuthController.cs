using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using AP2_Chat_DotNet_WebAPI.Models;
using System.Net;

namespace AP2_Chat_DotNet_WebAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserAuthController : ControllerBase
    {
        public IConfiguration _configuration;
        public UserAuthController(IConfiguration config)
        {
            _configuration = config;
        }
        [HttpPost]
        public IActionResult Post(string username, string password)
        {
            if (authUser(username, password))
            {
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Sub, _configuration["JWTParams:Subject"]),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                    new Claim("UserId", username)
                };
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWTParams:SecretKey"]));
                var mac = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var token = new JwtSecurityToken(
                    _configuration["JWTParams:Issuer"],
                    _configuration["JWTParams:Audience"],
                    claims,
                    expires: DateTime.UtcNow.AddDays(7),
                    signingCredentials: mac);
                return Ok(new JwtSecurityTokenHandler().WriteToken(token));
            }
            else
            {
                return Content("Invalid");
            }

            bool authUser(string username, string password)
            {
                UserModel userModel = new UserModel();
                User? user = userModel.getUser(username);
                if (user != null)
                {
                    if (user.password == password)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }
        }
        
    }
}
