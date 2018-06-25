// function ContainerTemplateUpdateRequest(model) {
//   this.id = model.Id;
//   this.Type = model.Type;
//   this.Name = model.Name;
//   this.Hostname = model.Hostname;
//   this.Title = model.Title;
//   this.Description = model.Description;
//   this.Note = model.Note;
//   this.Categories = model.Categories;
//   this.Platform = model.Platform;
//   this.Logo = model.Logo;
//   this.Image = model.Image;
//   this.Registry = model.Registry;
//   this.Command = model.Command;
//   this.Network = model.Network;
//   this.Privileged = model.Privileged;
//   this.Interactive = model.Interactive;
//   this.RestartPolicy = model.RestartPolicy;
//   this.Labels = model.Labels;
// }

function ContainerTemplateViewModel(data) {
  this.Id = data.Id;
  this.Type = data.type;
  this.Name = data.name;
  this.Hostname = data.hostname;
  this.Title = data.title;
  this.Description = data.description;
  this.Note = data.note;
  this.Categories = data.categories ? data.categories : [];
  this.Platform = data.platform ? data.platform : '';
  this.Logo = data.logo;
  this.Image = data.image;
  this.Registry = data.registry ? data.registry : '';
  this.Command = data.command ? data.command : '';
  this.Network = data.network ? data.network : '';
  this.Privileged = data.privileged ? data.privileged : false;
  this.Interactive = data.interactive ? data.interactive : false;
  this.RestartPolicy = data.restart_policy ? data.restart_policy : 'always';
  this.Labels = data.labels ? data.labels : [];

  this.Env = data.env ? data.env : [];

  this.Volumes = [];
  if (data.volumes) {
    this.Volumes = data.volumes.map(function (v) {
      return {
        containerPath: v.container,
        readOnly: v.readonly || false,
        type: v.bind ? 'bind' : 'auto',
        bind : v.bind ? v.bind : null
      };
    });
  }

  this.Ports = [];
  if (data.ports) {
    this.Ports = data.ports.map(function (p) {
      var portAndProtocol = _.split(p, '/');
      return {
        containerPort: portAndProtocol[0],
        protocol: portAndProtocol[1]
      };
    });
  }
  this.Hosts = data.hosts ? data.hosts : [];
}

function StackTemplateViewModel(data) {
  this.Type = data.type;
  this.Name = data.name;
  this.Title = data.title;
  this.Description = data.description;
  this.Note = data.note;
  this.Categories = data.categories ? data.categories : [];
  this.Platform = data.platform ? data.platform : 'undefined';
  this.Logo = data.logo;
  this.Repository = data.repository;
  this.Env = data.env ? data.env : [];
}

// TODO: remove
// function TemplateViewModel(data) {
//   this.Id = data.Id;
//   this.Type = data.type;
//   this.Name = data.name;
//   this.Hostname = data.hostname;
//   this.Title = data.title;
//   this.Description = data.description;
//   this.Note = data.note;
//   this.Categories = data.categories ? data.categories : [];
//   this.Platform = data.platform ? data.platform : 'undefined';
//   this.Logo = data.logo;
//   this.Image = data.image;
//   this.Registry = data.registry ? data.registry : '';
//   this.Command = data.command ? data.command : '';
//   this.Network = data.network ? data.network : '';
//   this.Env = data.env ? data.env : [];
//   this.Privileged = data.privileged ? data.privileged : false;
//   this.Interactive = data.interactive ? data.interactive : false;
//   this.RestartPolicy = data.restart_policy ? data.restart_policy : 'always';
//   this.Labels = data.labels ? data.labels : [];
//   this.Volumes = [];
//
//   if (data.volumes) {
//     this.Volumes = data.volumes.map(function (v) {
//
//       // @DEPRECATED: New volume definition introduced
//       // via https://github.com/portainer/portainer/pull/1154
//       var volume = {
//         readOnly: v.readonly || false,
//         containerPath: v.container || v,
//         type: 'auto'
//       };
//
//       if (v.bind) {
//         volume.name = v.bind;
//         volume.type = 'bind';
//       }
//
//       return volume;
//     });
//   }
//   this.Ports = [];
//   if (data.ports) {
//     this.Ports = data.ports.map(function (p) {
//       var portAndProtocol = _.split(p, '/');
//       return {
//         containerPort: portAndProtocol[0],
//         protocol: portAndProtocol[1]
//       };
//     });
//   }
//   this.Hosts = data.hosts ? data.hosts : [];
// }

function TemplateLSIOViewModel(data) {
  this.Type = data.type;
  this.Title = data.title;
  this.Note = data.description;
  this.Categories = data.category ? data.category : [];
  this.Platform = data.platform ? data.platform : 'linux';
  this.Logo = data.logo;
  this.Image = data.image;
  this.Registry = data.registry ? data.registry : '';
  this.Command = data.command ? data.command : '';
  this.Network = data.network ? data.network : '';
  this.Env = data.env ? data.env : [];
  this.Privileged = data.privileged ? data.privileged : false;
  this.Interactive = data.interactive ? data.interactive : false;
  this.RestartPolicy = data.restart_policy ? data.restart_policy : 'always';
  this.Volumes = [];
  if (data.volumes) {
    this.Volumes = data.volumes.map(function (v) {
      return {
        readOnly: false,
        containerPath: v,
        type: 'auto'
      };
    });
  }
  this.Ports = [];
  if (data.ports) {
    this.Ports = data.ports.map(function (p) {
      var portAndProtocol = _.split(p, '/');
      return {
        containerPort: portAndProtocol[0],
        protocol: portAndProtocol[1]
      };
    });
  }
}