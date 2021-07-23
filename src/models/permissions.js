let acl = new node_acl(new node_acl.memoryBackend(), {
    debug: (msg) => {
      console.log('-DEBUG-', msg);
    }
  });

  acl.allow([
    {
      roles: 'admin',
      allows: [
        {
          resources: '/api/test/admin',
          permissions: '*'
        }
      ]
    },
      {
      roles: 'admin',
      allows: [
        {
          resources: '/api/test/mod',
          permissions: 'post'
        }
      ]
    },
    {
      roles: 'user',
      allows: [
        {
          resources: '/api/test/admin',
          permissions: 'get'
        }
      ]
    }
  ]);