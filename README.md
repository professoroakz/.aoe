# .aoe

.aoe for all oktays projects and things

## Installation

### npm

```bash
npm install aoe
```

### Docker

```bash
docker pull professoroakz/aoe
```

## Usage

### CLI

```bash
npx aoe
```

### Docker

```bash
docker run professoroakz/aoe
```

## Publishing

### npm Publishing

The package is automatically published to npm when a new version tag is pushed:

```bash
git tag v1.0.0
git push origin v1.0.0
```

**Required Secrets:**
- `NPM_TOKEN`: npm authentication token

### Docker Publishing

The Docker image is automatically built and pushed to Docker Hub when a new version tag is pushed.

**Required Secrets:**
- `DOCKER_USERNAME`: Docker Hub username
- `DOCKER_PASSWORD`: Docker Hub password or access token
