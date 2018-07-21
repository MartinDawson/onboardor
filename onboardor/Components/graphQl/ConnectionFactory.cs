using Autofac;
using Octokit.GraphQL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onboardor.Components.graphQl
{
    public interface IConnectionFactory
    {
        IConnection CreateConnection(Connection connection);
        IConnection Connection { get; set; }
    }

    public class ConnectionFactory : IConnectionFactory
    {
        public IConnection Connection { get; set; }

        public IConnection CreateConnection(Connection connection)
        {
            return Connection = connection;
        }
    }
}
